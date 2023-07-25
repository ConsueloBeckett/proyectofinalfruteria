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
    <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
 
</Routes>
</BrowserRouter>
  );
}

export default App;
