export const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const resp = await fetch(url);

  console.log(resp);

  //   const poke = data.map((img) => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url,
  //   }));

  //   return poke;
};
