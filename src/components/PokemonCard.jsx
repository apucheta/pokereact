import { Card } from '@chakra-ui/react';
import { useFetchData } from '../hooks/useFetchData';
import { PokemonItem } from './PokemonItem';

export const PokemonCard = ({ pokemon }) => {
  const { resultados, isLoading } = useFetchData(pokemon);

  const copia = resultados;

  if (resultados !== undefined) {
    return (
      <>
        <Card m={5} maxW='sm' bg={'#523961'}>
          <PokemonItem key={copia} pokemon={copia} />
        </Card>
      </>
    );
  }
};
