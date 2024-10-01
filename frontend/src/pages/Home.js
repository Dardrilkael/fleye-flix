import { MovieCard } from "../components/MovieCard";
import React from "react";



import {PrimaryButton,SearchBar} from "../common"


const Home = ({searchTerm,setSearchTerm,handleSearch,updateLocalLikedMovies,movies,checkIfLiked,handleFavoriteMovie,clearSearch})=>{
    return ( <>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            onPress={updateLocalLikedMovies}
          />
         <PrimaryButton 
         label="Limpar"
         action={clearSearch}/>
          <div className="movie-list">
            {console.log(movies)}
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  isInFavorites={checkIfLiked(movie)}
                  onButtonPress ={handleFavoriteMovie}
                />  
              ))
            ) : movies.Response==="False" ? (
              <p>Nenhum filme encontrado.</p>
            ) : <p>Bem Vindo</p>
            }
          </div>
        </>);
}

export default Home;

