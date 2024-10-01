import React from "react";

import { useMovieCard } from "./controller"
import {FavoriteButton, LikeButton} from "../../common"
export const MovieCard = (props)=>{
   
    const { movie, isFavorite, isLoading, toggleFavorite, selectMovie} = useMovieCard(props);
    return (
        <div
        onClick={selectMovie}
            style={{ cursor: 'pointer' }}
            className="max-w-[360px] mx-auto bg-white rounded-3xl shadow-xl p-4"
        >
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-auto rounded-t-3xl object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold">{movie.Title}</h2>
                <span className="text-slate-400 font-semibold">({movie.Year})</span>
                <LikeButton
                    isLoading={isLoading} 
                    isFavorite={isFavorite} 
                    handleLike={toggleFavorite}
                />

            </div>
        </div>
    );

}




