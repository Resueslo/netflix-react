import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import Search from './Search/Search';
import "./Navbar/Navbar.css"
import Dropdown from './Dropdown/Dropdown';

function CustomNavbar({ url }) {
  const [showModal, setShowModal] = useState(false);
  

  const [dropdown, setDropdown] = useState(false);

 

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }



  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <Navbar className="nav" bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/home">
              <img
                alt=""
                src="/logo.png"
                width="100"
                className="logo"
              />{' '}
            </Link>

          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home">Inicio</NavLink>
            <li className="nav-link"  onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}  >Generos
              {dropdown && <Dropdown url={url}/>}
            </li>
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

      <Search show={showModal} fullscreen={true} closeModal={handleCloseModal}></Search>
    </>
  )
}

export default CustomNavbar