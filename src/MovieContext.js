import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 101
    },
    {
      name: "Jumanji",
      price: "$20",
      id: 102
    },
    {
      name: "Inception",
      price: "$5",
      id: 103
    },
  ]);
  
  const [total, setTotal] = useState(5);

  return(
    <MovieContext.Provider
      value={{
        movies: movies, 
        setMovies: setMovies,
        total: total
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

