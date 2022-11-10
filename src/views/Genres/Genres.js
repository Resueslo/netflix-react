import { useState, useEffect } from 'react'
import { Link,  useParams } from "react-router-dom";
import '../Detalle/detalle.css'
import { getMoviesGenre,getGenreMovies } from "../../services/services";
import Loading from '../../components/Loading';



import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomNavbar from '../../components/CustomNavbar'
import CustomCard from '../../components/CustomCard/CustomCard';



const  Genres = () => {
  const { id, name } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getMoviesGenre(id).then(response=>{
      setMovies(response.data.results)
      setLoading(false)
   })
  }, [id]);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <CustomNavbar url={getGenreMovies}/>
      <Container className="container-general">
        <Row>
          <Col>
            <h4 className='mt-5'> {name } </h4>
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