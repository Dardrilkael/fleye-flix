import React from "react";
import { MovieCard } from "../components/MovieCard/index";
import { Header } from "../components/Header";

const Favorites = ({ likedMovies, handleFavoriteMovie, navigateHome }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Filmes Favoritos"/>

      <div className="container mx-auto px-4 pt-10">
        {likedMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedMovies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isInFavorites={true}
                onButtonPress={handleFavoriteMovie}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-8">
            Parace que você não gostou de nenhum filme.
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
