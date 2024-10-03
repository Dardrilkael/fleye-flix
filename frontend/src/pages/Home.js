import { MovieCard } from "../components/MovieCard";
import React from "react";
import "./home.css";
import { Header } from "../components/Header";
import sadFace from "../assets/sadface.png";
import { GhostButton, SearchBar } from "../common";

const Home = ({
  movies,
  isLoading,
  searchTerm,
  clearSearch,
  handleSearch,
  setSearchTerm,
  checkIfLiked,
  updateLocalLikedMovies,
  handleFavoriteMovie,
}) => {
  const renderLoading = () => {
    return (
    <div className="mt-10 flex justify-center items-center">
    
    <div class="spinner" />
</div>)
  };

  const renderNotFound = () => {
    return (
      <div>
        <img className="mb-4" src={sadFace} />
        <p>Nenhum Filme Encontrado</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Fleye Flix">
        <div className="hidden lg:flex justify-center">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            onPress={updateLocalLikedMovies}
          />

          <GhostButton label="Limpar &#128465;" action={clearSearch} />
        </div>
      </Header>

      <div className="flex lg:hidden justify-center mt-10">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          onPress={updateLocalLikedMovies}
        />

        <GhostButton label="Limpar &#128465;" action={clearSearch} />
      </div>

      <div className="container mx-auto px-4 pt-10">
        {!movies?.length && !movies?.Response && !isLoading ? (
          <p className="text-3xl font-bold text-center text-gray-800 mt-10">
            Bem Vindo
          </p>
        ) : null}

        {isLoading ? (
          renderLoading()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            <>
              {movies.Response === "False"
                ? renderNotFound()
                : movies?.map((movie, index) => (
                    <MovieCard
                      key={movie.imdbID}
                      movie={movie}
                      isInFavorites={checkIfLiked(movie)}
                      onButtonPress={handleFavoriteMovie}
                    />
                  ))}
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
