import React from "react";
import { useContext, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { LinkContainer } from "react-router-bootstrap";

import { AuthContext } from '../../context/AuthContext/AuthContext';

import Login from '../User/Login/Login';
import Register from "../User/Register/Register";


const MenuHeader = () => {
    const { user } = useContext(AuthContext);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const loginHandler = () => {
        setShowLogin(true)
    }
    const registerHandler = () => {
        setShowRegister(true);
    }

    return (
        <>
            <Login show={showLogin} close={() => setShowLogin(false)} />
            <Register show={showRegister} close={() => setShowRegister(false)} />
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <LinkContainer type="button" to="/">
                            <Navbar.Brand>Navbar Offcanvas</Navbar.Brand>
                        </LinkContainer>

                        <LinkContainer type="button" to="/Catalog">
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Catalog
                            </Offcanvas.Title>
                        </LinkContainer>

                        {user.username === ''
                            ?
                            <>

                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Button type="button" onClick={loginHandler} >
                                        Login
                                    </Button>
                                </Offcanvas.Title>

                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Button type="button" onClick={registerHandler}>
                                        Register
                                    </Button>
                                </Offcanvas.Title>

                            </>
                            :
                            <>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            {user.username}
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                            <LinkContainer type="button" to="/Create">
                                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                    Create
                                                </Offcanvas.Title>
                                            </LinkContainer>

                                            <LinkContainer type="button" to="/MyCatalog">
                                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                    My Movie
                                                </Offcanvas.Title>
                                            </LinkContainer>

                                            <NavDropdown
                                                title="Dropdown"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            >
                                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action4">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action5">
                                                    Something else here
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>

                                        <LinkContainer type="button" to="/Logout">
                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                Logout
                                            </Offcanvas.Title>
                                        </LinkContainer>


                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </>
                        }
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default MenuHeader;