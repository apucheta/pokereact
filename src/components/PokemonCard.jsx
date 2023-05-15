import { Card } from '@chakra-ui/react';
import { useFetchData } from '../hooks/useFetchData';
import { PokemonItem } from './PokemonItem';

export const PokemonCard = ({ pokemon }) => {
  const { resultados, isLoading } = useFetchData(pokemon);
  console.log('soy el pokemon', pokemon);
  console.log('soy un resultado', resultados);
  // {resultados.sprites.other['official-artwork']}
  console.log('tipos', resultados?.types);
  const copia = resultados;
  console.log(copia);
  if (resultados !== undefined) {
    return (
      <>
        <Card mt='5' maxW='sm'>
          <PokemonItem pokemon={copia} />
        </Card>
      </>
    );
  }
};
