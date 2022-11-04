import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsSearch, BsFillBellFill } from "react-icons/bs";

const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="100"
              className="d-inline-block"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
            <Nav.Link href="#">Generos</Nav.Link>
            <Nav.Link href="#">Novedades populares</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">
            <BsSearch></BsSearch>
            </Nav.Link>
            <Nav.Link href="#">
              <BsFillBellFill></BsFillBellFill>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar