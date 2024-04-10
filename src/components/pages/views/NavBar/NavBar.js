import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <Navbar.Brand href="/">head-waiter.app</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link
            as={NavLink}
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
