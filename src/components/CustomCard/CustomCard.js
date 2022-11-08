import React from 'react'
import Card from 'react-bootstrap/Card';

const CustomCard = props => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original"
  const url_pelicula = `${URL_IMAGE}${props.pelicula.poster_path}`;
  
  return (
    <Card>
      <Card.Img variant="top" src={url_pelicula} />
      <Card.Body>
        <Card.Title>{props.pelicula.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CustomCard