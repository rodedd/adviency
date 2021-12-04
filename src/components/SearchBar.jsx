import React, { useState } from 'react';

import '../styles/SearchBar.css';

const SearchBar = ({ gifts, setGifts }) => {

  const [newGift, setNewGift] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setGifts([
      ...gifts,
      newGift,
    ]);
  };

  const handleChange = (e) => {
    setNewGift(e.target.value);
    
  };  

  return (
    <form className='SearchBar' onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Agregar regalo..."
        onChange={e => handleChange(e)}
      />
      <button>Agregar</button>
    </form>
  );
}

export { SearchBar };