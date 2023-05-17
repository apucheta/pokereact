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
        <Heading size='md' mb={2} textTransform='capitalize' color={'white'}>
          {pokemon.name}
        </Heading>
        <Divider />
        <Stack direction='row'>
          <Text
            mt={2}
            fontSize='sm'
            width='40%'
            textAlign='left'
            color={'white'}
          >
            {pokemon.desc}
          </Text>
          <Divider
            orientation='vertical'
            colorScheme='blue'
            variant='solid'
            width='20%'
          />
          <Stack color={'white'}>
            <Heading size={'sm'} mt={2}>
              Altura:
            </Heading>
            <Text>{pokemon.height / 10} m</Text>
            <Heading size={'sm'} mt={2}>
              Peso:
            </Heading>
            <Text>{pokemon.weight / 10} kg</Text>
          </Stack>
        </Stack>
      </Stack>
    </CardBody>
  );
};
