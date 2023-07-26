import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({products, image, nombre, precio, cantidad, id}) => {

  return (
    <div>
    <img src={products.image} alt="" width={40} height={40} />
    <h3>Nombre: {products.nombre}</h3>
    <p>Precio: ${products.precio}</p>
    <p>Cantidad: {products.cantidad}</p>
    <Link to={`/item/${id}`}><button>Detalles</button></Link> 
    <hr />
  
    </div>

  ) 
};

export default Item;