import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from 'react-router-dom';

import CustomCard from '../components/CustomCard/CustomCard';

import { obtenerBusquedasPalabras } from "../services/services";
import { Container } from 'react-bootstrap';

const CustomModal = ({ show, fullscreen, closeModal }) => {

  const [lista, setLista] = useState([]);

  const navigate = useNavigate();

  function handleSearch(e) {
    let busqueda = e.target.value

    if (busqueda)
      obtenerBusqueda(busqueda)
    else
      setLista([])
  }

  const obtenerBusqueda = async busqueda => {
    await obtenerBusquedasPalabras("multi", busqueda).then((response) => {
      setLista(response.data.results)
    })
  }

  const handleCloseModal = () => {
    setLista([])
    closeModal()
  }



  const ir = pelicula => {
    if(pelicula.media_type !== 'person') {
      //closeModal()
      return { pathname: `/detalle/${pelicula.id}/${pelicula.media_type}`, state: { id: pelicula.id, type: pelicula.media_type } }
    }
  }

  return (
    <Modal className="modal-busqueda" show={show} fullscreen={fullscreen} onHide={() => handleCloseModal()}>
      <Modal.Header closeButton >
        <Form>
          <Form.Group className="form-busqueda" controlId="">
            <Form.Control type="text" placeholder="Peliculas, Series, Actores" onKeyUp={(e) => handleSearch(e)} />
          </Form.Group>
        </Form>
      </Modal.Header>
      <Modal.Body>


        <Container fluid>
          <Row className='mt-5 mb-5'>
            <Col md="12" className='col-recomendaciones'>
              {
                lista.length ?
                  lista.map((pelicula, index) => <Link className="link-movie" key={pelicula.id} to={ir(pelicula)}><CustomCard pelicula={pelicula} key={index}></CustomCard></Link>) :
                  <div className='sin-resultados'>Sin resultados para mostrar</div>
              }
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal