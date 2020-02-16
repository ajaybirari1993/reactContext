import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () =>{
  const context = useContext(MovieContext);
  const movies = context.movies;
  
  return(
    <div>
      {
        movies.map(movie => {
          return(
            <Movie
              name={movie.name}
              price={movie.price}
              id={movie.id}
              key = {movie.id}
            />
          )
        })
      }
    </div>
  );
}

export default MovieList;