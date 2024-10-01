import "./index.css";
import "./App.css";


import React, { useState, useEffect } from "react";
import {fetchMovies,fetchLikedMovies,addFavoriteMovie,removeFavoriteMovie} from "./api/Movies"
import Favorites from "./pages/Favorites"
import Footer from "./components/Footer";
import Home from './pages/Home'


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentState, setCurrentState] = useState("inicio");

  const handleSearch = async (e) => {
    try {
      setIsLoading(true);
      const response = await fetchMovies(searchTerm);
      console.log("The result is",response);
      
      setMovies(response.data.Search||response.data||{Error:"Not found"}); 
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const updateLocalLikedMovies = async () => {
    try {
      const response = await fetchLikedMovies();
      setLikedMovies(response.data || []); // Adjust this based on your API structure
    } catch (error) {
      console.error("Error fetching liked movies:", error);
    }
  };

  useEffect(() => {
    updateLocalLikedMovies();
  }, []); 

  const checkIfLiked = (movie) => {
    return likedMovies.some((likedMovie) => likedMovie.imdbID === movie.imdbID);
  };

  const handleFavoriteMovie = async (movie, isFavorite) => {
    try {
      if (!isFavorite) 
          await addFavoriteMovie(movie);
      else 
          await removeFavoriteMovie(movie.imdbID);
        } catch (error) {
      console.error("Error updating favorites:", error);
      }
      updateLocalLikedMovies();
  };
  
  const ClearSearch =()=>{
    setMovies([]);
  }

  const ChangeState = (state)=>{
    setCurrentState(state);
    if(currentState ===state && currentState==="inicio")
      ClearSearch();
  };

  const renderLayers = ()=>{
    switch (currentState) {
      case "inicio":
        return (<Home  
          movies={movies}
        searchTerm={searchTerm}
        isLoading={isLoading}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        updateLocalLikedMovies={updateLocalLikedMovies}
        checkIfLiked={checkIfLiked}
        handleFavoriteMovie={handleFavoriteMovie}
        clearSearch = {ClearSearch}
      />)
      case "favoritos":
        return(<Favorites  
        likedMovies={likedMovies}
        handleFavoriteMovie={handleFavoriteMovie}
        checkIfLiked={checkIfLiked}
        updateLiked={updateLocalLikedMovies}
      />)
    }
  };



  return (
    <div className="App">
      {renderLayers()}
      <Footer 
        setState={ChangeState}
        clearSearch={ClearSearch} 
      />
    </div>);
}

export default App;
