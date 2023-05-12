import { useEffect, useState } from 'react';
import { getPokemon } from '../helpers/getPokemon';

export const useFetchData = (search) => {
  console.log('busqueda papi', search);
  const [resultados, setResultados] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getPokemon(search);
    console.log('data', data);
    // setResultados(newImgs);
    // setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { pokemons, isLoading };
};
