import './App.css';

import Header from './Header';
import Footer from './Footer';
import {Movie} from './Movie';
import React, { useState, useEffect  } from 'react';

import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [showLiked, setShowLiked] = useState(false); 
  const [wasSearched, setSearched] = useState(false); 
  const handleSearch = async (e)=>{

    setSearched(true);
    try {
      const response = await axios.get(`http://192.168.0.223:8080/movies/${searchTerm}`);
      setMovies(response.data.Search ||[]); // Adjust this based on your API structure
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
    };

    const fetchLikedMovies = async () => {
      try {
        
        const response = await axios.get("http://localhost:8080/liked-movies");
        setLikedMovies(response.data || []); // Adjust this based on your API structure
      } catch (error) {
        console.error("Error fetching liked movies:", error);
      }
    };

    useEffect(() => {

      fetchLikedMovies();
    }, []); // Runs once on mount

    const checkIfLiked = (movie) => {
      return likedMovies.some(likedMovie => likedMovie.imdbID === movie.imdbID);
    };
  

  
    return (
      <div className="App">
        {!showLiked ? (
          <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
            <div className="movie-list">
              {movies.length > 0 ? (
                movies.map((movie, index) => (
                  <Movie
                    key={movie.imdbID}
                    movie={movie}
                    isInFavorites={checkIfLiked(movie)}
                    updateLiked={fetchLikedMovies}
                  />
                ))
              ) : (  wasSearched ? (
                <p>Nenhum filme encontrado.</p>
              ) : null // You should return null instead of empty parentheses
              )}
            </div>
          </>
        ) : (
          <div className="liked-movies">
            <h2>Filmes Favoritos</h2>
            {likedMovies.length > 0 ? (
              likedMovies.map((movie, index) => (
                <Movie
                  key={movie.imdbID}
                  movie={movie}
                  isInFavorites={true}
                  updateLiked={fetchLikedMovies}
                />
              ))
            ) : (
              <p>Nenhum filme favorito encontrado.</p>
            )}
          </div>
        )}

        <Footer setShowLiked={setShowLiked} />
      </div>
    );
  }
  

export default App;
