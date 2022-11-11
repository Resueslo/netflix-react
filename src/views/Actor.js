import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import './Detalle/detalle.css'
import { obtenerBiografia, obtenerPeliculas } from "../services/services";
import Loading from '../components/Loading';

import moment from 'moment';


import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomNavbar from '../components/CustomNavbar'
import CustomCard from '../components/CustomCard/CustomCard';

const Actor = () => {
  const { id } = useParams();

  const URL_IMAGE = "https://image.tmdb.org/t/p/original/"

  const [actor, setActor] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    obtenerBiografiaActor(id)
    obtenerPeliculasActor(id)
  }, [id]);

  const obtenerBiografiaActor = async id => {
    await obtenerBiografia(id)
      .then((response) => {
        if (response.data) {
          setActor(response.data)
          setLoading(false)
        }
      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });
  }

  const obtenerPeliculasActor = async id => {
    await obtenerPeliculas(id)
      .then((response) => {
        if (response.data) {
          setPeliculas(response.data.cast)
        }
      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });

  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <CustomNavbar />
      <Container className="container-general">
        <Row className="justify-content-md-center pt-5">
          <Col xs md="6">
            <Image fluid className='poster' src={`${URL_IMAGE}${actor.profile_path}`}></Image>
          </Col>
          <Col xs md="6">
            <h3 className='mt-5'>{actor.name}</h3>
            <div className="mt-4 mb-4">
              <p className="text-gray">Biografia: <span className="text-white">{actor.biography}</span></p>
              <p className="text-gray">Fecha de nacimiento: <span className="text-white">{moment(actor.birthday).format("DD MMMM YYYY")}</span></p>
              <p className="text-gray">Lugar de nacimiento: <span className="text-white">{actor.place_of_birth}</span></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className='mt-5'>Peliculas en las que ha participado:</h4>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md="12" className='col-recomendaciones'>
            {
              peliculas.map((pelicula, index) => <Link className="link-movie" key={pelicula.id} to={{ pathname: `/detalle/${pelicula.id}/movie`, state: { id: pelicula.id, type: "movie" } }}><CustomCard pelicula={pelicula} key={index}></CustomCard></Link>)
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Actor