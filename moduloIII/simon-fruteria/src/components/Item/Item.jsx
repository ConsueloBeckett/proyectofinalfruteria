import React from 'react'
import { Link } from 'react-router-dom';
import './item.css'




const Item = ({products, image, nombre, precio, cantidad, id}) => {

  return (
    <div className='itemDiv'>
    <img src={products.image} alt={nombre} width={40} height={40} />
    <h3>Nombre: {products.nombre}</h3>
    <p>Precio: ${products.precio}</p>
    <p>Cantidad: {products.cantidad}</p>
    <Link to={`/item/${products.id}`}><button>Detalles</button></Link> 
   
  
    </div>

  ) 
};

export default Item;