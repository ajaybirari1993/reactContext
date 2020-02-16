import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav =() =>{
  const context = useContext(MovieContext);
  const movies = context.movies;
  debugger;
  return(
    <div>
      Total: {movies.length}
    </div>
  )
}

export default Nav;