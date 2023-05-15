import { CardBody, Image, Heading, Text } from '@chakra-ui/react';

export const PokemonItem = ({ pokemon }) => {
  console.log('props', pokemon);
  return (
    <>
      <CardBody>
        <Image
          src={pokemon.sprites?.other['official-artwork'].front_default}
          alt={`Artwork de ${pokemon.name}`}
          borderRadius='md'
        />

        <Heading size='md'>{pokemon.name?.toString().toUpperCase()}</Heading>

        <Text>
          {`Altura: ${pokemon.height}`} <br />
          {`Peso: ${pokemon.weight}`}
          {/* {`Tipos: ${pokemon.types[0].type.name}`} */}
        </Text>
        {pokemon.types?.map((tipo) => {
          <h1>hola</h1>;
          <Heading size='xl'>
            {/* {console.log('tipo', tipo.type.name)} */}
            {/* type.name */}
            {tipo?.type.name.toString().toUpperCase()}
          </Heading>;
        })}
      </CardBody>
    </>
  );
};
