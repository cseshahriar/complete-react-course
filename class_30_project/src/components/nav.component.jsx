import React from "react";
import { useNavigate } from 'react-router-dom'
import {Cookies, withCookies} from "react-cookie";

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
import {faUser} from "@fortawesome/free-solid-svg-icons";

import '../stylesheets/navbar.css';

function NavBarComponent() {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const logout = (e) => {
        cookies.remove('token');
        navigate('/');
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')} style={{cursor: 'pointer'}}>React E-Commerce</Navbar.Brand>
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
                        {
                            cookies.get('token') ?
                                <>
                                    <Nav.Link href="/cart"><FontAwesomeIcon icon={faCartPlus} /> Cart</Nav.Link>
                                    <Nav.Link href="/dashboard"><FontAwesomeIcon icon={faCogs} />  Admin User</Nav.Link>
                                    <NavDropdown title="Username" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/logout" onClick={logout}><FontAwesomeIcon icon={faSignOut} /> Logout</Nav.Link>

                                </>
                                :
                                <>
                                    <Nav.Link href="/login"><FontAwesomeIcon icon={faSignOut} /> Login</Nav.Link>
                                    <Nav.Link href="/register"><FontAwesomeIcon icon={faUser} /> Register</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default React.memo(NavBarComponent);