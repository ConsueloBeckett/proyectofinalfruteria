import { ChakraProvider} from '@chakra-ui/react'
import { Navbar} from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer';
import { CardProductos} from './components/Main';

function App() {
  return (
    <ChakraProvider>
     <Navbar />
     <ItemListContainer greeting="BIENVENIDO LA FRUTERIA DON GATO"/>
      <CardProductos/>
    </ChakraProvider>
    
  );
}

export default App;
