import React from 'react'
import { Navbar , Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
     <Navbar bg="light" expand="lg" margin="0px">
     <a class="navbar-brand" href="#home">
            <img src="https://www.arabnet.me/ContentFiles/20137Logo.png?w=336&h=336&mode=fit" width="100px" height="80px" alt="appoint me"/>
        </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Hospital Service</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hotel Service </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">saloon Service</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex "  >
          <FormControl type="text" placeholder="Search" className="mr-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    
    </div>

  )
}

export default NavBar;