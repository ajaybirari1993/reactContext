import React, {useState, useContext} from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () =>{
  const context = useContext(MovieContext);
  const setMovie  = context.setMovies;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = (event)=>{
    setName(event.target.value);
  }

  const updatePrice = (event)=>{
    setPrice(event.target.value);
  }

  const addMovie = (event) =>{
    event.preventDefault();
    setMovie(prevMovie => [...prevMovie, {name: name, price: price}]);
  }
  return(
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName}/>
      <input type="text" name="price" value={price} onChange={updatePrice}/>
      <button >Add</button>
    </form>
  )
}

export default AddMovie;