import axios from "axios";

export class Services {

    URL_API = "https://api.themoviedb.org/3";
    API_KEY = "9eb4e5199ac559b2a5a63d0b43ea5c76";

    async obtenerDetallePelicula(id_movie) {
        let movieUrl = `${this.URL_API}/movie/${id_movie}?api_key=${this.API_KEY}&language=es-MX`    
        try {
            let response = await axios.get(movieUrl)
            return response.data
        } catch (e) {
            return []
        }
    }

}