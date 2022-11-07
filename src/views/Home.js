import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'

const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="container-general">
        Home
      </Container>
    </>
  )
}

export default Home