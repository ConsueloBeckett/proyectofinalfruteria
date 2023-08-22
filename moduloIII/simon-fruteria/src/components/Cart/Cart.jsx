import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, EmptyCart, totalPrice} = useContext(CartContext);

  const handleEmpty = () => {
    EmptyCart()
  }

  return (
    <div className='container'>
      <p>Tus compras</p>
      {cart.map((prod) => (
        <div className='item' key={prod.id}>
          <img src={prod.image} alt={prod.id} />
          <div className='item-info'>
            <h2>{prod.nombre}</h2>
            <p>Precio unitario ${prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio total ${prod.precio * prod.cantidad} </p>
            
            <br />
          </div>
        </div>
      ))
      }

      { 
     
      <>
      <h4>Precio total: ${totalPrice()} </h4>
      <button onClick={handleEmpty}> Empty cart </button>  
      <button> <Link to='/checkout' className='option'>Checkout</Link> </button> 
     
      </>
      }
    
    
    </div>
  );
};

export default Cart;
