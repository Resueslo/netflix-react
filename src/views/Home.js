import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'

const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="mt-5 pt-4">
        Home
      </Container>
    </>
  )
}

export default Home