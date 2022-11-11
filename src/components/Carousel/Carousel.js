import React, { useState, useEffect } from 'react'
import {imageUrl } from '../../services/services';
import "./Carousel.css"
import clientAxios from '../../config/clientAxios';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Carousel  ({name,url,type})  {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        async function getData(){
            const request = await clientAxios.get(url);
            setMovies(request.data.results); 
        }
        getData();
    }, [url]);


    return (
        <div className='row row__custom'>
            <h2>{name}</h2>
            <div  className='row__posters'>
                { movies.map(movie => {
                        const url= imageUrl+movie.poster_path;
                        return(
                        <Link  key={movie.id} to={{ pathname:`/detalle/${movie.id}/${type}`, state: { id: movie.id , type: type}} }><Image key={movie.id} src={url} className="row__poster" alt={movie.name}></Image></Link>
                        )
                    })
                }
            </div>
        </div>



    )
}

export default Carousel;

    
    


