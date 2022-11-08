import { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import CustomModal from './CustomModal';

const CustomNavbar = () => {  
  const [showModal, setShowModal] = useState([]);

  function handleShowModal() {
    console.log("entro");
    setShowModal(true);
  }

  function handleCloseModal() {
    console.log("entro");
    setShowModal(false);
  }



  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/home">
              <img
                alt=""
                src="/logo.png"
                width="100"
                className="d-inline-block"
              />{' '}
            </Link>

          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Inicio</NavLink>
            <NavLink className="nav-link">Series</NavLink>
            <NavLink className="nav-link">Generos</NavLink>
            <NavLink className="nav-link">Novedades populares</NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-link">
              <BsSearch onClick={() => handleShowModal()}></BsSearch>
            </NavLink>
            <NavLink className="nav-link">
              <BsFillBellFill></BsFillBellFill>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

      <CustomModal show={showModal} fullscreen={true} closeModal={handleCloseModal}></CustomModal>
    </>
  )
}

export default CustomNavbar