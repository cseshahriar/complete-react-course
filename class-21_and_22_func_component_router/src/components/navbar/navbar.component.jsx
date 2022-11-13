
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const AppNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">App Name</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="/dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Nav.Link>
            <Nav.Link href="/404">
            <Link to="/dfdfdf">Error</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default AppNavbar;