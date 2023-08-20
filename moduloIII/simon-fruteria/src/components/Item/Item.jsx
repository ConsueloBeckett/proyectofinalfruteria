import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';


const Item = ({ products, nombre, precio, stock, id }) => {
  return (
    <div className='itemDiv'>
      <img src={products.image} alt={nombre} width={60} height={60} />
      <h3> {products.nombre}</h3>
      <p>Precio: ${products.precio}</p>
      <p>Stock: {products.stock}</p>
      <Link to={`/item/${products.id}`}>
        <button className='detailsButton'>Detalles</button>
      </Link>
    </div>
  );
};

export default Item;
