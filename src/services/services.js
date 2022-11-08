
import clientAxios from "../config/clientAxios";

const API_KEY = "9eb4e5199ac559b2a5a63d0b43ea5c76";
export const imageUrl="https://image.tmdb.org/t/p/w220_and_h330_face";
export const videoUrl="https://www.youtube.com/watch?v="
export const detailUrl= "/detalle.html?id=";

export const getLastMovies = `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const  getGenreMovies = clientAxios.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
export const getTvShows = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`;



export const getDataMovie = (id_movie) => {
    return   clientAxios.get(`/movie/${id_movie}?api_key=${API_KEY}&language=es-MX`);

}

export const  obtenerCreditosPelicula =  (id_movie) => {
    return    clientAxios.get( `/movie/${id_movie}/credits?api_key=${API_KEY}&language=en-US`);
}

export const  obtenerRecomendacionesPeliculas = (id_movie) => {
    return   clientAxios.get(`/movie/${id_movie}/recommendations?api_key=${API_KEY}&language=en-US`);
}

export const  obtenerFechasYCertificacion =  (id_movie) => {
    return  clientAxios.get(`/movie/${id_movie}/release_dates?api_key=${API_KEY}&language=en-US`);
}

export const  obtenerBusquedasPalabras =  (busqueda, texto)=> {
    return  clientAxios.get(`/search/${busqueda}?api_key=${API_KEY}&language=en-US&query=${texto}&page=1&include_adult=false`);
}





export const  getDetailTV =  (id)=> {
    return  clientAxios.get(`/tv/${id}?api_key=${API_KEY}&language=en-US`);

}

export const  getTrending =  (option) =>{
    return   `/trending/${option}/day?api_key=${API_KEY}&language=en-US`;

}

export const  obtenerVideosPelicula =  (id) => {
    return  clientAxios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
}

export const  obtenerPeliculas =  (id_person) => {
    return  clientAxios.get(`/person/${id_person}/movie_credits?api_key=${API_KEY}&language=en-US`);
}

export const  obtenerBiografia =  (id_person) => {
    return  clientAxios.get(`/person/${id_person}?api_key=${API_KEY}&language=en-US`);

}

export const  obtenerRecomendacionesTV = (id_movie) => {
    return  clientAxios.get(`/tv/${id_movie}/recommendations?api_key=${API_KEY}&language=en-US`);

}