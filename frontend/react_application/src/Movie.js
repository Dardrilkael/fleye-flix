    import React, { useEffect, useState } from "react";
    import axios from 'axios';

    const Movie = ({movie,isInFavorites,updateLiked})=>{
        const [isFavorite,setIsFavorite] = useState(false);
        useEffect(() => {
            setIsFavorite(isInFavorites);
        }, [isInFavorites]);

        const toggleFavorite = async () => {
            
            if(!isFavorite)
                {
                    try {
                        
                        await axios.post("http://192.168.0.223:8080/liked-movies", movie);
                    } catch (error) {
                console.error("Error updating favorites:", error);
            }}
            if(isFavorite){
                try {
                    
                    await axios.delete(`http://192.168.0.223:8080/liked-movies/by-imdbid?imdbid=${ movie.imdbID}`);
                } catch (error) {
                    console.error("Error updating favorites:", error);
                }
            }
            
            setIsFavorite (!isFavorite); 
            updateLiked();

        };

        let onClick = ()=>{}
        return (
            <div onClick={onClick} style={{ cursor: 'pointer' }}>
                <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', height: '150px' }} />
                <h2>{movie.Title}</h2>
                <span onClick={toggleFavorite} style={{ fontSize: '24px', color: isFavorite ? 'red' : 'grey' }}>
                ♥
            </span>
            </div>
        );
    }






    export {Movie}


