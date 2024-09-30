// LikedMovies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie'; // Import the Movie component

const LikedMovies = () => {
    const [likedMovies, setLikedMovies] = useState([]);

    useEffect(() => {
        const fetchLikedMovies = async () => {
            try {
                const response = await axios.get('http://192.168.0.223:8080/liked-movies'); // Adjust the endpoint as needed
                setLikedMovies(response.data || []);
            } catch (error) {
                console.error("Error fetching liked movies:", error);
            }
        };

        fetchLikedMovies();
    }, []);

    return (
        <div>
            <h1>Liked Movies</h1>
            <div className="movie-list">
                {likedMovies.length > 0 ? (
                    likedMovies.map((movie, index) => (
                        <Movie key={index} movie={movie} isInFavorites={true} /> // Assuming all liked movies are favorites
                    ))
                ) : (
                    <p>No liked movies found.</p>
                )}
            </div>
        </div>
    );
};

export default LikedMovies;
