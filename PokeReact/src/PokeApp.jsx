import { useState } from 'react';
import { SearchPokemon } from './components/SearchPokemon';
import { PokemonItem } from './components/PokemonItem';

export const PokeApp = () => {
  const [pokemon, setPokemon] = useState([]);

  const OnNewPokemon = (pkm) => {
    if (!pokemon.includes(pkm)) {
      setPokemon([pkm, ...pokemon]);
    }
  };

  return (
    <>
      <h1>Pokedex con React</h1>
      <SearchPokemon newPokemon={OnNewPokemon} />
      {pokemon.map((pkm) => (
        <PokemonItem key={pkm} pokemon={pkm} />
      ))}
    </>
  );
};
