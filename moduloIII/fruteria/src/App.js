import { ChakraProvider} from '@chakra-ui/react'
import { Navbar} from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
     <Navbar />
     <ItemListContainer greeting="Hola, como va?"/>
    
    </ChakraProvider>
    
  );
}

export default App;
