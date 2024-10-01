import axios from "axios";

const fetchMovies = (searchTerm) =>{
    const result = axios.get(`http://192.168.0.223:8080/movies/${searchTerm}`);
    return result;
}

const fetchLikedMovies = () =>
    axios.get("http://192.168.0.223:8080/liked-movies");

const addFavoriteMovie = (movie) =>
    axios.post("http://192.168.0.223:8080/liked-movies", movie);

const removeFavoriteMovie = (imdbID) =>
    axios.delete(`http://192.168.0.223:8080/liked-movies/by-imdbid?imdbid=${imdbID}`);

export{fetchMovies,fetchLikedMovies,addFavoriteMovie,removeFavoriteMovie}