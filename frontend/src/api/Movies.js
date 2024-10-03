import axios from "axios";
const fetchMovies = (searchTerm) =>{
    const result = axios.get(`${process.env.REACT_APP_API_URL}/movies/${searchTerm}`);
    return result;
}

const fetchLikedMovies = () =>
    axios.get(`${process.env.REACT_APP_API_URL}/liked-movies`);

const addFavoriteMovie = (movie) =>
    axios.post(`${process.env.REACT_APP_API_URL}/liked-movies`, movie);

const removeFavoriteMovie = (imdbID) =>
    axios.delete(`${process.env.REACT_APP_API_URL}/liked-movies/by-imdbid?imdbid=${imdbID}`);

export{fetchMovies,fetchLikedMovies,addFavoriteMovie,removeFavoriteMovie}