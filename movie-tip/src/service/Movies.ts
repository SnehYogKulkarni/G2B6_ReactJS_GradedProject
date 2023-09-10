import axios from 'axios';
import IMovies from '../models/IMovies';

const apiBaseUrl = 'http://localhost:4000';

const getMovies = async (movieType: string) => {
    const response = await axios.get(`${apiBaseUrl}/${movieType}`);
    return response.data as IMovies[];
}

const getMovieById = async (movieType: string, id: string) => {
    const response = await axios.get(`${apiBaseUrl}/${movieType}/${id}`);
    return response.data as IMovies;
}


export {
    getMovies,
    getMovieById
}