import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
export const Navigation = () => {
  return (
    <Navbar>
      <Container className="outline">
        <Navbar.Brand href="home">freE-book reader</Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link href="categories"> Categories </Nav.Link>
          <Nav.Link href="about"> About </Nav.Link>
          <Nav.Link href="contribute"> Contribute </Nav.Link>
          <Nav.Link href="account"> Account </Nav.Link>
          
     <a href="login"> <FaUserAlt className="login-icon"/></a>
    
        </Nav>
      </Container>
    </Navbar>
  );
};
