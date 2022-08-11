import React from "react";
import { useContext, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'

import { LinkContainer } from "react-router-bootstrap";

import { AuthContext } from '../../context/AuthContext';
import { OffcanvasContext } from "../../context/OffcanvasContext";

import Login from '../User/Login/Login';
import Register from "../User/Register/Register";

import "../MenuHeader/MenuHeader.css";


const MenuHeader = () => {
    const { user } = useContext(AuthContext);
    const { showOffcanvas, setShowOffcanvas } = useContext(OffcanvasContext);
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

            <Navbar key="xxl" bg="dark" variant="dark" expand="xxl" className="mb-3">
                <Container fluid>

                    <LinkContainer type="button" to="/">
                        <Navbar.Brand>
                            <FontAwesomeIcon icon={faFilm} />{'  '}
                            Ultimate Movie
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer type="button" to="/Catalog">
                            <Nav.Link>
                                Catalog
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {user.username === ''
                        ?
                        <>
                            <div className="menuHeader-login-register">
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                                    <Button type="button" variant="outline-primary" onClick={loginHandler} >
                                        Login
                                    </Button>
                                </Offcanvas.Title>

                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                                    <Button type="button" variant="outline-primary" onClick={registerHandler}>
                                        Register
                                    </Button>
                                </Offcanvas.Title>
                            </div>
                        </>
                        :
                        <>
                            <Navbar.Toggle onClick={() => setShowOffcanvas(true)} aria-controls="offcanvasNavbarLabel-expand-xxl" />
                            <Navbar.Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}
                                scroll="true"
                                id="offcanvasNavbarLabel-expand-xxl"
                                aria-labelledby="offcanvasNavbarLabel-expand-xxl"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
                                        {user.username}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <LinkContainer type="button" onClick={() => setShowOffcanvas(false)} to="/Create">
                                            <Offcanvas.Title class="offcanvas-border-button" id="offcanvasNavbarLabel-expand-xxl">
                                                Create
                                            </Offcanvas.Title>
                                        </LinkContainer>

                                        <LinkContainer type="button" onClick={() => setShowOffcanvas(false)} to="/MyCatalog">
                                            <Offcanvas.Title class="offcanvas-border-button" id="offcanvasNavbarLabel-expand-xxl">
                                                My Movie
                                            </Offcanvas.Title>
                                        </LinkContainer>


                                        <LinkContainer type="button" to="/Logout">
                                            <Offcanvas.Title class="offcanvas-border-button" id="offcanvasNavbarLabel-expand-xxl">
                                                Logout
                                            </Offcanvas.Title>
                                        </LinkContainer>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </>
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default MenuHeader;