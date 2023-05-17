import {
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
} from '@chakra-ui/react';

export const PokemonItem = ({ pokemon }) => {
  return (
    <CardBody>
      <Image
        src={pokemon.sprites?.other['official-artwork'].front_default}
        alt={`Artwork de ${pokemon.name}`}
        borderRadius='md'
      />

      <Stack direction='column'>
        <Heading size='md' mb={2} textTransform='capitalize'>
          {pokemon.name}
        </Heading>
        <Divider />
        <Stack direction='row'>
          <Text mt={2} fontSize='sm' width='40%' textAlign='center'>
            {pokemon.desc}
          </Text>
          <Divider
            orientation='vertical'
            colorScheme='blue'
            variant='solid'
            width='20%'
          />
          <Text mt={2} fontSize='sm' width='40%' textAlign='center'>
            {`Altura: ${pokemon.height / 10} m`}
            <br />
            {`Peso: ${pokemon.weight / 10} kg`}
          </Text>
        </Stack>
      </Stack>
    </CardBody>
  );
};
