import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className='justify-content-center' expand="lg">
      <Container>
        <Navbar.Brand href="/">The Craftsman Way</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutpage">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/createprojectpage">Add Project</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tablespage">Tables</NavDropdown.Item>
              <NavDropdown.Item href="/furniturepage">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="/interiorpage">Interior</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar