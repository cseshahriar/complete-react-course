import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {faCogs} from "@fortawesome/free-solid-svg-icons";
import {faSignIn} from "@fortawesome/free-solid-svg-icons";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";

import '../stylesheets/navbar.css';

function NavBarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Products..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="m-auto">
                        <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartPlus} /> Cart</Nav.Link>
                        <Nav.Link href="/dashboard"><FontAwesomeIcon icon={faCogs} />  Admin User</Nav.Link>

                        <NavDropdown title="Username" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/login"><FontAwesomeIcon icon={faSignIn} /> Register</Nav.Link>
                        <Nav.Link href="/login"><FontAwesomeIcon icon={faSignOut} /> Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default React.memo(NavBarComponent);