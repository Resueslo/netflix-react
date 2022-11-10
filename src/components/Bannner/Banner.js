import clientAxios from '../../config/clientAxios';
import { useEffect, useState } from 'react';
import './Banner.css'
import { Link } from "react-router-dom";

function Banner({ url }) {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            const request = await clientAxios.get(url);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        getData();
    }, [url]);


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
            )`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner__contents'>
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <div className="banner__button">Play</div>
                    <Link className="banner__button" to={movie.id ?  `/detalle/${movie.id}/movie` : ""}>Más información</Link>
                </div>

                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>

    )
}

export default Banner;