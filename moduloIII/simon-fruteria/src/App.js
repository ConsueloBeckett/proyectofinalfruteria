import { ItemCount } from './components/ItemCount/ItemCount';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  
  return (

 <BrowserRouter>
   <Navbar/>
 <ItemCount initial={1} stock={10} onAdd={(number) => console.log('Agregaste ' + number + ' productos')}/>
<ItemListContainer/>
</BrowserRouter>
  );
}

export default App;
