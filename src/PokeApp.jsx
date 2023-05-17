import { useState } from 'react';
import { SearchPokemon } from './components/SearchPokemon';
import { PokemonItem } from './components/PokemonItem';

import {
  CircularProgress,
  Divider,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
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
    <div className='fondo'>
      <Heading
        as='h1'
        size='4xl'
        mb={2}
        ml={2}
        bg='#3b234a'
        color={'whiteAlpha.700'}
      >
        Pokedex con React
      </Heading>
      <Divider />
      <SearchPokemon newPokemon={OnNewPokemon} />
      {/* {isLoading && (
        <CircularProgress isIndeterminate color={`${array[2]}.800`} />
      )} */}
      <SimpleGrid spacing={4} columns={[1, 2, 3, 4]}>
        {anteriores.map((pkm) => (
          <PokemonCard key={pkm} pokemon={pkm}></PokemonCard>
        ))}
      </SimpleGrid>
    </div>
  );
};
