import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'
import  Carousel  from '../components/Carousel'
import {getLastMovies,getTrending, getTvShows} from '../services/services.js'
const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="container-general">
        Home
        <Carousel name="Populares" url={getLastMovies}/>
        <Carousel name="Tendencias" url={getTrending('movie')}/>
        <Carousel name="Series" url={getTrending('tv')}/>
        <Carousel name="Shows de TV " url={getTvShows}/>
      </Container>
    </>
  )
}

export default Home