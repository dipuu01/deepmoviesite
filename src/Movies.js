import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section className="">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-4-col">
        {movies.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0, 15);

          return (
            <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <div className="card">
                <div className="cardinfo">
                  <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                  <img src={Poster} alt={Title} />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
    
  );
};

export default Movies;
