import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from './AddMovies';

import {MovieProvider} from './MovieContext';

function App() {
  
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie/>
        <MovieList />
      </div>
    </MovieProvider>
    
  );
}

export default App;
