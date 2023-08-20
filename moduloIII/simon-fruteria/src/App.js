import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Form from './components/Form/Form';
import  {CartProvider} from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <CartProvider>
 <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/cart" element={<Cart/>}/>

    <Route path="*" element={<h1>NOT FOUND 404</h1>}/>
</Routes>
</BrowserRouter>
</CartProvider>

  );
}

export default App;
