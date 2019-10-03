import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Test Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link className="nav-link" to="/tests">Tests</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
