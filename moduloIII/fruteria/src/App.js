import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar} from './components/Navbar'

function App() {
  return (
    <ChakraProvider>
      <Heading>I'm a Heading</Heading>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
