import { useEffect, useState } from 'react';
import { getPokemon } from '../helpers/getPokemon';

export const useFetchData = (search) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const newImgs = await getPokemon(search);
    setImages(newImgs);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { images, isLoading };
};
