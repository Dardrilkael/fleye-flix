import React, { useState } from "react";
import { fetchMovies } from "../api/Movies";
import Header from "../components/Header";
import { MovieCard } from "../components/MovieCard";

const SearchPage = ({ likedMovies, handleFavoriteMovie, updateLocalLikedMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [wasSearched, setSearched] = useState(false);

  const handleSearch = async () => {
    setSearched(true);
    try {
      const response = await fetchMovies(searchTerm);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const checkIfLiked = (movie) => {
    return likedMovies.some((likedMovie) => likedMovie.imdbID === movie.imdbID);
  };

  const clearSearch = () => {
    setSearched(false);
    setMovies([]);
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      <button onClick={clearSearch}>Go Home</button>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isInFavorites={checkIfLiked(movie)}
              onButtonPress={handleFavoriteMovie}
            />
          ))
        ) : wasSearched ? (
          <p>No movies found.</p>
        ) : null}
      </div>
    </>
  );
};

export default SearchPage;
