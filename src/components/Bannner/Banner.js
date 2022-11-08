
import React from 'react'
import clientAxios from '../../config/clientAxios';
import { useEffect, useState } from 'react';
import './Banner.css'
function Banner({ url }) {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function getData() {
            const request = await clientAxios.get(url);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            console.log(movie);
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
                <div className="banner_buttons">
                    <div className="banner_button">Play</div>
                    <div className="banner_button">My List</div>
                </div>

                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>

    )
}

export default Banner;