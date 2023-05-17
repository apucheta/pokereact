import { useEffect, useState } from 'react';
import { getPokemon } from '../helpers/getPokemon';

export const useFetchData = (search) => {
  const [resultados, setResultados] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await getPokemon(search);
    console.log('data con desc', data);
    setResultados(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log('resultados dentro de hook', resultados);

  return { resultados, isLoading };
};
