import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";


const SingleMovie = () => {
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState({ show: false, msg: "" });

    const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;

    useEffect(() => {
        const fetchMovie = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.Response === "True") {
                    setMovie(data);
                    setIsError({ show: false, msg: "" });
                } else {
                    setIsError({ show: true, msg: data.Error });
                }
            } catch (error) {
                setIsError({ show: true, msg: error.message });
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovie();
    }, [API_URL, id]);

    if (isLoading) {
        return (
            <section className="movie-section">
                <div className="loading">Loading movie details...</div>
            </section>
        );
    }

    if (isError.show) {
        return (
            <section className="movie-section">
                <div className="error">{isError.msg}</div>
            </section>
        );
    }

    if (!movie) {
        return (
            <section className="movie-section">
                <div className="error">Movie not found!</div>
            </section>
        );
    }

    return (
        <section className="movie-section">
            <div className="movie-card">
                <figure>
                    <img src={movie.Poster} alt={movie.Title} />
                </figure>
                <div className="card-content">
                    <p className="title">{movie.Title}</p>
                    <p className="card-text">{movie.Released}</p>
                    <p className="card-text">{movie.Genre}</p>
                    <p className="card-text">{movie.imdbRating} / 10</p>
                    <p className="card-text">{movie.Country}</p>
                    <NavLink to="/" className="back-btn">
                        Go Back
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default SingleMovie;
