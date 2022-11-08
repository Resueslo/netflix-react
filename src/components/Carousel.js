import React, { useState, useEffect } from 'react'
import {imageUrl } from '../services/services';
import "./carousel.css"
import clientAxios from '../config/clientAxios';
import { Row,Image } from 'react-bootstrap';

function Carousel  ({name,url})  {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        async function getData(){
            const request = await clientAxios.get(url);
            setMovies(request.data.results);
            return request;
        }
        getData();
    }, [url]);





    return (
        <Row>
            <h2>{name}</h2>
            <div  className='row__posters'>
                { movies.map(movie => {
                        const url= imageUrl+movie.poster_path;
                        return <Image key={movie.id} src={url} className="row__poster" alt={movie.name}></Image>
                    
                    })
                }
            </div>
        </Row>



    )
}

export default Carousel;

    
    


