import { RouterProvider } from 'react-router-dom';
import RouterConfig from './routes/_RouterConfig';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={RouterConfig} />
      </ChakraProvider>
    </>
  );
}
export default App;