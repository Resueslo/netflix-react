import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'
import  Carousel  from '../components/Carousel/Carousel'
import {getLastMovies,getTrending, getTvShows} from '../services/services.js'
import  Banner  from '../components/Bannner/Banner'
const Home = () => {
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="container-general">
        <Banner url={getLastMovies}/>
        <Carousel name="Populares" url={getLastMovies}/>
        <Carousel name="Tendencias" url={getTrending('movie')}/>
        <Carousel name="Series" url={getTrending('tv')}/>
        <Carousel name="Shows de TV " url={getTvShows}/>
      </Container>
    </>
  )
}

export default Home