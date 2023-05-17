import { useState } from 'react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import { InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const SearchPokemon = ({ newPokemon }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length <= 1) {
      return;
    }
    newPokemon(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup bg={'#523961'} mt={2} ml={2}>
        <InputLeftElement>
          <Search2Icon color='whiteAlpha.700' />
        </InputLeftElement>
        <Input
          type='text'
          placeholder='Buscar pokemon'
          onChange={handleSearch}
          value={search}
          color={'white'}
        />
      </InputGroup>
    </form>
  );
};
