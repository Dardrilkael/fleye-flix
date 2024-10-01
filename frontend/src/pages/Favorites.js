import React from "react";
import { MovieCard } from "../components/MovieCard/index";

const Favorites = ({ likedMovies, handleFavoriteMovie, navigateHome }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-700">Filmes Favoritos</h2>
      </header>


      <div className="container mx-auto p-4">
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
          <p className="text-center text-gray-500 text-lg mt-8">Parace que você não gostou de nenhum filme.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
