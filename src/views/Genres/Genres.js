import { useState, useEffect } from 'react'
import { Link,  useParams, useLocation } from "react-router-dom";
import '../Detalle/detalle.css'
import { getMoviesGenre,getGenreMovies } from "../../services/services";



import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomNavbar from '../../components/CustomNavbar'
import CustomCard from '../../components/CustomCard/CustomCard';



const  Genres = () => {
  const { id } = useParams();
  const location= useLocation();
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesGenre(id).then(response=>{
      setMovies(response.data.results)
   })
  }, [id]);

  

  return (
    <>
      <CustomNavbar url={getGenreMovies}/>
      <Container className="container-general">
        <Row>
          <Col>
            <h4 className='mt-5'>{location.state.name}</h4>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md="12" className='col-recomendaciones'>
            {
              movies.map((pelicula, index) => <Link className="link-movie" key={pelicula.id} to={{ pathname:`/detalle/${pelicula.id}/movie`, state: { id: pelicula.id , type: "movie"}} }><CustomCard pelicula={pelicula} key={index}></CustomCard></Link>)
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default Genres;