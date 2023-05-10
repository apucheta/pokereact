/* eslint-disable react/prop-types */
import { useState } from 'react';

export const SearchPokemon = ({ newPokemon }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length <= 1) {
      return;
    }
    newPokemon(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar pokemon'
        onChange={handleSearch}
        value={search}
      />
    </form>
  );
};
