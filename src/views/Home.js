import React from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'
import  Carousel  from '../components/Carousel/Carousel'
import {getGenreMovies, getLastMovies,getTrending, getTvShows} from '../services/services.js'
import  Banner  from '../components/Bannner/Banner'
const Home = () => {
  return (
    <>
      <CustomNavbar url={getGenreMovies}/>
      <Container fluid className="container-general">
        <Banner url={getLastMovies}/>
        <Carousel name="Populares" url={getLastMovies} type="movie"/>
        <Carousel name="Tendencias" url={getTrending('movie')} type="movie"/>
        <Carousel name="Series" url={getTrending('tv')} type="tv"/>
        <Carousel name="Shows de TV " url={getTvShows} type="tv"/>
      </Container>
    </>
  )
}

export default Home