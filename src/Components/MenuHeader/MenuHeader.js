import React from "react";
import { useContext } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { LinkContainer } from "react-router-bootstrap";

import { AuthContext } from '../../context/AuthContext/AuthContext';


const MenuHeader=()=> {
    const { user } = useContext(AuthContext);

    return (
        <>
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

                        {user.username ===''
                            ?
                            <>
                                <LinkContainer LinkContainer type="button" to="/login" >
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Login
                                    </Offcanvas.Title>
                                </LinkContainer >

                                <LinkContainer type="button" to="/register">
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Register
                                    </Offcanvas.Title>
                                </LinkContainer>
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

                                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                My Movie
                                            </Offcanvas.Title>

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