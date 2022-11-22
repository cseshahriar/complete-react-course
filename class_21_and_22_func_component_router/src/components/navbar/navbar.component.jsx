
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>App Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'users'}>Users</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default AppNavbar;