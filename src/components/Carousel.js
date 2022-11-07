import React ,{ useState , useEffect } from 'react'
import {getLastMovies } from '../services/services';


export const Carousel = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const getMovies = async () => {
            
            setMovies(await getLastMovies().then(response => {
                console.log(response.data);
                setMovies(response.data);
            }).catch(error =>{setError(error)})); 
    }

    useEffect(() => {
         getMovies();
        console.log(movies);
    }, []);

    return (
        <div>Carousel</div>
    )
}
