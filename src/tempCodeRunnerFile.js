import React from 'react';
import { useGlobalContext } from './context';

const Movies = () => {
  const{movies}=useGlobalContext();

  return (
    
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movies.map((curMovie) => {
          const{imdbID,Title,Poster}=curMovie;
        return
          <NavLink to={`movie/${imdbID}`}>
            <div className="Card">
              <div className="card-info">
                <h2>{Title}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>;
        
       })}</div>

    </section>
      
    
  );
};

export default Movies
