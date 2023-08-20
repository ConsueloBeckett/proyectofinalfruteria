
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import {  useState, useContext} from 'react'


const ItemDetail = ({nombre, id, caracteristica, category, image, stock, precio}) => {
  const products = ({nombre, id, caracteristica, category, image, stock, precio})

const {cart, addToCart } = useContext(CartContext);
console.log(cart)

const [cantidad, setCantidad] = useState(1);

const handleRest = () => {
  cantidad > 1 && setCantidad(cantidad -1)

}

const handleAdd = () => {
  cantidad < products.stock && setCantidad(cantidad +1)

}

return (
 
    <div className="container">
      <div className='item-image'>
      <img src={image} alt={nombre} ></img></div>
      <div className='item-details'>
    <h3 className='item-name'>Nombre: 
    {nombre}</h3>
    <h4 className='item-description'> Caracteristicas: {caracteristica}</h4>
    <div  className='item-properties'>
    <p className='property-label'>Categoria: {category}</p>
    <p className='property-label'>Precio: ${precio}</p>
    </div>
   <ItemCount cantidad={cantidad} 
   handleRest={handleRest} 
   handleAdd={handleAdd} 
   handleCart={() => {addToCart(products, cantidad)} }/>
   </div>
  </div>
  
  )
}

export default ItemDetail