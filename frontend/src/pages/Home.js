import { MovieCard } from "../components/MovieCard";
import React from "react";
import { Header } from "../components/Header";
import sadFace from "../assets/sadface.png"
import { GhostButton, SearchBar } from "../common";

const Home = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
  updateLocalLikedMovies,
  movies,
  checkIfLiked,
  handleFavoriteMovie,
  clearSearch,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Filmes Favoritos">


        <div className="hidden lg:flex justify-center">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            onPress={updateLocalLikedMovies}
          />

          <GhostButton
            label="Limpar &#128465;"
            action={clearSearch}
          />
        </div>
      </Header>


      <div className="flex lg:hidden justify-center mt-10">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            onPress={updateLocalLikedMovies}
          />

          <GhostButton
            label="Limpar &#128465;"
            action={clearSearch}
          />
        </div>

      <div className="container mx-auto px-4 pt-10">
        <div className="movie-list">
          {console.log(movies)}
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                isInFavorites={checkIfLiked(movie)}
                onButtonPress={handleFavoriteMovie}
              />
            ))
          ) : movies.Response === "False" ? (
            <div>
            <img 
            className="mb-4"
            src = {sadFace}
            />
            <p>Nenhum Filme Encontrado</p>
            </div>
          ) : (
            <p className="text-3xl font-bold text-center text-gray-800 mt-10">Bem Vindo</p>

          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
