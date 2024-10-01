import { useEffect, useState } from "react";

export const useMovieCard = ({movie,isInFavorites, onButtonPress }) => {

    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsFavorite(isInFavorites);
    }, [isInFavorites]);

    const toggleFavorite = async () => {
        setIsLoading(true);
        await onButtonPress(movie, isFavorite)
        
        setIsFavorite (!isFavorite);

        setTimeout(() => {
            setIsLoading(false);
        }, 150);

    };

    const selectMovie = ()=>{}

    return { movie, isLoading, toggleFavorite,isFavorite, selectMovie}

}