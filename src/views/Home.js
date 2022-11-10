import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CustomNavbar from '../components/CustomNavbar'
import  Carousel  from '../components/Carousel/Carousel'
import {getGenreMovies, getLastMovies,getRatedMovies,getTrending, getTvShows} from '../services/services.js'
import  Banner  from '../components/Bannner/Banner'
import Top10 from '../components/Top10/Top10'
import Loading from '../components/Loading'

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 100)
  }, []);

  if (loading) {
    return <Loading />
  }



  return (
    <>
      <CustomNavbar url={getGenreMovies}/>
      <Container fluid className="container-general">
        <Banner url={getLastMovies}/>
        <Top10 name="Las 10 peliculas mas Populares" url={getRatedMovies} type="movie"/>
        <Carousel name="Populares" url={getLastMovies} type="movie"/>
        <Carousel name="Tendencias" url={getTrending('movie')} type="movie"/>
        <Carousel name="Series" url={getTrending('tv')} type="tv"/>
        <Carousel name="Shows de TV " url={getTvShows} type="tv"/>
      </Container>
    </>
  )
}

export default Home