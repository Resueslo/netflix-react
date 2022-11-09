import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import './detalle.css'
import { getDataMovie, obtenerCreditosPelicula, obtenerFechasYCertificacion, obtenerRecomendacionesPeliculas, getDetailTV } from "../../services/services";
import { generarString } from '../../utilities/functions/arrayToText'

import moment from 'moment';


import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CustomNavbar from '../../components/CustomNavbar'
import CustomCard from '../../components/CustomCard/CustomCard';


const Detalle = () => {
  //PARAMETROS
  const { id, type } = useParams();
  
  const URL_IMAGE = "https://image.tmdb.org/t/p/original/"

  const [detalle, setDetalle] = useState([]);
  const [generos, setGeneros] = useState("");
  const [produccion, setProduccion] = useState("");
  const [creditos, setCreditos] = useState("");
  const [certificacion, setCertificacion] = useState("");
  const [recomendaciones, setRecomendaciones] = useState([]);

  useEffect(() => {
    if(type === 'tv') {
      obtenerDetalleTv(id)
    } else {
      obtenerDetalle(id)
      obtenerCertificacion(id)
    }
    obtenerCreditos(id, type)
    obtnerRecomendaciones(id, type)
  }, [id]);

  const obtenerDetalle = async id => {
    await getDataMovie(id)
      .then((movie) => {
        if (movie.data) {
          let url = movie.data.poster_path ?  `${URL_IMAGE}${detalle.poster_path}` : ""
          setDetalle({...movie.data, url_img: url})

          setGeneros(generarString(movie.data.genres))
          setProduccion(generarString(movie.data.production_companies))
        }
      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });

  }

  const obtenerDetalleTv = async id => {
    await getDetailTV(id)
      .then((movie) => {
        if (movie.data) {
          let url = movie.data.poster_path ?  `${URL_IMAGE}${detalle.poster_path}` : ""
          setDetalle({...movie.data, url_img: url})

          setGeneros(generarString(movie.data.genres))
          setProduccion(generarString(movie.data.production_companies))
        }
      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });

  }

  const obtenerCreditos = async (id, type) => {
    await obtenerCreditosPelicula(id, type)
      .then((creditos) => {
        if (creditos.data) {
          setCreditos(generarString(creditos.data.cast))
        }
      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });

  }

  const obtenerCertificacion = async id => {
    await obtenerFechasYCertificacion(id)
      .then((fechas) => {
        let fecha = fechas.data.results.find(fecha => fecha.iso_3166_1 === "MX" || fecha.iso_3166_1 === "US");

        if (fecha) {
          setCertificacion(fecha.release_dates[0].certification)
        }

      }).catch(() => {
        console.log("Ocurrio un error, intente de nuevo más tarde.")
      });
  }

  const obtnerRecomendaciones = async (id, type) => {
    await obtenerRecomendacionesPeliculas(id, type).then((recomendaciones) => {

      if (recomendaciones.data) {
        setRecomendaciones(recomendaciones.data.results)
      }
    });
  }

  const generarElenco = (actor, index) => {
    return (
      <span><Link to="/home" key={index}>{actor}</Link>,</span>
    )
  }

  return (
    <>
      <CustomNavbar />
      <Container className="container-general">
        <Row className="justify-content-md-center pt-5">
          <Col xs md="6">
            <Image fluid className='poster' src={detalle.url_img}></Image>
          </Col>
          <Col xs md="6">
            <h3 className='mt-5'>{detalle?.title || detalle?.name}</h3>
            <div className="mt-4 mb-4">
              <span id="fecha">{moment(detalle.release_date).format("YYYY")}</span>
              <span id="certificacion" className="ms-3">{certificacion}</span>
            </div>
            <div className="">
              <p className="text-gray">Elenco:
                <span className="text-white" id="elenco">
                  {creditos}
                  {/* {
                    //creditos.map((actor, index) => <Link to="/home" key={index}>{actor}</Link>)
                  } */}
                </span>
              </p>
              <p className="text-gray">Géneros: <span className="text-white" id="genero">{generos}</span></p>
              <p className="text-gray">Producción: <span className="text-white" id="produccion">{produccion}</span></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className='mt-5'>Recomendaciones</h4>
          </Col>
        </Row>
        <Row className='mb-5'>
          <Col md="12" className='col-recomendaciones'>
            {
              recomendaciones.map((pelicula, index) => <Link className="link-movie" key={pelicula.id} to={{ pathname:`/detalle/${pelicula.id}/${pelicula.media_type}`, state: { id: pelicula.id , type: pelicula.media_type}} }><CustomCard pelicula={pelicula} key={index}></CustomCard></Link>)
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default Detalle