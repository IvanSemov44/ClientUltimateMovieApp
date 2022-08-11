import React from "react";


import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faSnapchat,
    faInstagram,
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

import "../About/About.css";

const About = () => {

    return (
        <>
            <div className="flex-about">
                <Navbar variant="dark" className="flex-column">
                    <Navbar.Brand>
                        Service
                    </Navbar.Brand>
                    <Nav className="flex-column">
                        <Nav.Link>
                            Web design
                        </Nav.Link>
                        <Nav.Link>
                            Development
                        </Nav.Link>
                        <Nav.Link>
                            Hosting
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Navbar variant="dark" className="flex-column">
                    <Navbar.Brand>
                        About
                    </Navbar.Brand>
                    <Nav className="flex-column">
                        <Nav.Link>
                            Company
                        </Nav.Link>
                        <Nav.Link>
                            Team
                        </Nav.Link>
                        <Nav.Link>
                            Careers
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Navbar variant="dark" className="flex-column about-desc">
                    <Navbar.Brand className="about-desc-title">
                        Ultimate Movie
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>
                            Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                        </Nav.Link>
                    </Nav>
                </Navbar>


            </div>
            <div className="flex-about fontIcon">
                <FontAwesomeIcon className="about-fb" icon={faFacebookF} />
                <FontAwesomeIcon className="about-fb" icon={faTwitter} />
                <FontAwesomeIcon className="about-fb" icon={faSnapchat} />
                <FontAwesomeIcon className="about-fb" icon={faInstagram} />
                <FontAwesomeIcon className="about-fb" icon={faGithub} />
                <FontAwesomeIcon className="about-fb" icon={faLinkedinIn} />
            </div>
            <div className="flex-about about-copy">
                Ultimate Movie &copy; {new Date().getFullYear()}
            </div>
        </>
    );
}

export default About;




