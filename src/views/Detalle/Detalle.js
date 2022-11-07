import { useState, useEffect } from 'react'
import './detalle.css'
import { Services } from "../../services/Services";

import moment from  'moment';


import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomNavbar from '../../components/CustomNavbar'


const Detalle = () => {
  const services = new Services()
  const URL_IMAGE = "https://image.tmdb.org/t/p/original"

  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    obtenerDetalle(634649)
  }, []);

  const obtenerDetalle = id => {
    services.obtenerDetallePelicula(id)
      .then((movie) => {
        console.log("detalle", movie)
        setDetalle(movie)
      });

  }

  return (
    <>
      <CustomNavbar />
      <Container className="container-general">
        <Row className="justify-content-md-center pt-5">
          <Col xs lg="6">
            <Image fluid className='poster' src={`${URL_IMAGE}${detalle.poster_path}`}></Image>
          </Col>
          <Col xs lg="6">
            <h3 className='mt-5'>{detalle.title}</h3>
            <div className="mt-4 mb-4">
              <span id="fecha">{moment(detalle.release_date).format("YYYY")}</span>
              <span id="certificacion" className="ms-3">PG-13</span>
            </div>
            <div className="col-md-12">
              <p className="text-gray">Elenco: <span className="text-white" id="elenco"><a className="link-actor">Tom Holland,  </a><a className="link-actor">Zendaya,  </a><a className="link-actor">Benedict Cumberbatch,  </a><a className="link-actor">Jacob Batalon,  </a><a className="link-actor">Jon Favreau,  </a><a className="link-actor">Jamie Foxx,  </a><a className="link-actor">Willem Dafoe,  </a><a className="link-actor">Alfred Molina,  </a><a className="link-actor">Benedict Wong,  </a><a className="link-actor">Tony Revolori,  </a><a className="link-actor">Marisa Tomei,  </a><a className="link-actor">Andrew Garfield,  </a><a className="link-actor">Tobey Maguire,  </a><a className="link-actor">Angourie Rice,  </a><a className="link-actor">Arian Moayed... </a><a className="link-actor">Paula Newsome,  </a><a className="link-actor" href="#" id="verMas">Ver más</a></span></p>
              <p className="text-gray">Géneros: <span className="text-white" id="genero">Action, Adventure, Science Fiction</span></p>
              <p className="text-gray">Producción: <span className="text-white" id="produccion">Columbia Pictures, Marvel Studios, Pascal Pictures</span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default Detalle