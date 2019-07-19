import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Row } from 'reactstrap';
import './NavBar.scss';


export default class NavBar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        {/* <Container className="navbarContainer"> */}
         
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="navBar">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/About">About us</Nav.Link>
                  <Nav.Link href="/Performances">Performances</Nav.Link>
                  <Nav.Link href="/Dates">Dates & tickets</Nav.Link>
                  <Nav.Link href="/Shop">Shop</Nav.Link>
                  <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
         
        {/* </Container> */}
      </div>
    )
  }
}
