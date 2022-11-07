import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'
import { Carousel } from '../components/Carousel'
const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="mt-5 pt-4">
        Home
        <Carousel></Carousel>
      </Container>
    </>
  )
}

export default Home