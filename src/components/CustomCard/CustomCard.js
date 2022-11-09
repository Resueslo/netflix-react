import React from 'react'
import Card from 'react-bootstrap/Card';

const CustomCard = props => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original"
  const url_img = props.pelicula.poster_path || props.pelicula.profile_path
  const url_pelicula = url_img ? `${URL_IMAGE}${url_img}` : '/No_disponible.png'
  
  return (
    <Card>
      <Card.Img variant="top" src={url_pelicula} />
      <Card.Body>
        <Card.Title>{props.pelicula.title || props.pelicula.name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCard