import React, { useEffect, useState } from 'react'
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import CustomModal from './CustomModal';
import "./Navbar/Navbar.css"
import clientAxios
  from '../config/clientAxios';

function CustomNavbar({ url }) {
  const [showModal, setShowModal] = useState(false);
  const [genres, setGenres] = useState([]);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    async function getData() {
      const request = await clientAxios.get(url);
      setGenres(request.data.genres);
    }
    getData();
  }, [url]);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
            <NavLink className="nav-link">Series</NavLink>
            <NavLink className="nav-link">Generos

              {/* {genres.map(genre => {
                console.log(genre.name)
              })
              } */}

            </NavLink>
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