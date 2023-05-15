import { useState } from 'react';
import { SearchPokemon } from './components/SearchPokemon';
import { PokemonItem } from './components/PokemonItem';

import { CircularProgress, Heading, SimpleGrid } from '@chakra-ui/react';
import { PokemonCard } from './components/PokemonCard';

export const PokeApp = () => {
  const [anteriores, setAnteriores] = useState(['pichu']);

  const OnNewPokemon = (pkm) => {
    if (!anteriores.includes(pkm)) {
      console.log('pkm', pkm);
      setAnteriores([pkm, ...anteriores]);
    }
  };
  // console.log(isLoading);

  const array = ['blue', 'red', 'orange', 'green'];
  return (
    <>
      <Heading as='h1' size='4xl'>
        Pokedex con React
      </Heading>
      <br />
      <SearchPokemon newPokemon={OnNewPokemon} />
      {/* {isLoading && (
        <CircularProgress isIndeterminate color={`${array[2]}.800`} />
      )} */}
      <SimpleGrid spacing={4} columns={3}>
        {anteriores.map((pkm) => (
          <PokemonCard key={pkm} pokemon={pkm}></PokemonCard>
        ))}
      </SimpleGrid>
    </>
  );
};
