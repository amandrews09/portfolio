// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'

const NavigationBar = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar bg="grey" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about-me" onClick={() => handlePageChange('About Me')}>
            About Me
          </Nav.Link>
          <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>
            Contact
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
