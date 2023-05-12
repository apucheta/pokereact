import React from 'react';

import ReactDOM from 'react-dom/client';
import { PokeApp } from './PokeApp.jsx';

import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <PokeApp />
    </ChakraProvider>
  </React.StrictMode>
);
