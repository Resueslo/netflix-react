import axios from 'axios';

const clientAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default clientAxios;