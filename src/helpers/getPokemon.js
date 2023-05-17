export const getPokemon = async (pokemon) => {
  console.log('entre a obtener pokemon', pokemon);
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const respPokemon = await fetch(urlPokemon);
  const dataPokemon = await respPokemon.json();

  const urlDesc = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
  const respDesc = await fetch(urlDesc);
  const { flavor_text_entries } = await respDesc.json();

  const poke = {
    height: dataPokemon.height,
    weight: dataPokemon.weight,
    sprites: dataPokemon.sprites,
    // types: dataPokemon.types,
    name: dataPokemon.name,
    desc: flavor_text_entries[0]?.flavor_text,
  };

  return poke;
};
