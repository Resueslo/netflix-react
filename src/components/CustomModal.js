import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CustomModal = props => {
  const { show, fullscreen, closeModal } = props;

  return (
    <Modal className="modal-busqueda" show={show} fullscreen={fullscreen} onHide={() => closeModal()}>
      <Modal.Header closeButton />
      <Modal.Body>
        <Form>
          <Form.Group className="" controlId="">
            <Form.Label>Buscar</Form.Label>
            <Form.Control type="email" placeholder="Títulos, Actores" />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal