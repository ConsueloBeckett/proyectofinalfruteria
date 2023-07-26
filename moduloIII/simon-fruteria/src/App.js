import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  return (

 <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
    <Route path="*" element={<h1>NOT FOUND 404</h1>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
