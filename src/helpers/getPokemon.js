export const getPokemon = async (pokemon) => {
  console.log('entre a obtener pokemon', pokemon);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const poke = {
    height: data.height,
    weight: data.weight,
    sprites: data.sprites,
    types: data.types,
    name: data.name,
  };

  return poke;
};
