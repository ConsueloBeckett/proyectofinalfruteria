import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({products}) => {

  return (
    <div>
    <img src={products.image} alt="" width={40} height={40} />
    <h2>{products.nombre}</h2>
    <p>{products.precio}</p>
    <p>{products.cantidad}</p>
    <Link to={`/producto/${products.id}`}><button>Detalles</button></Link> 
  
    </div>

  ) 
};

export default Item;