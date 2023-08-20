import {  createContext, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]); 

    const addToCart = (products,cantidad) => {
      const productCart = {...products,cantidad};
    
     const newCart = [...cart]; 
     const onTheCart = newCart.find((producto) => producto.id === productCart.id);
    
      if (onTheCart){
        onTheCart.cantidad += cantidad;
      } else {
        newCart.push(productCart)
      }
      setCart(newCart);
    }
     const quantityCart  = () => {
      return cart.reduce((acc, prod) => acc + prod.cantidad, 0 );
     }
    
     const totalPrice = () => {
      return cart.reduce((acc,prod) => acc + prod.precio * prod.cantidad, 0  )
     }
    
    
    const EmptyCart =() =>{
      setCart([]);
    }

    return (
    <CartContext.Provider value={{cart, 
    addToCart, 
    quantityCart, 
    EmptyCart, 
    totalPrice}}>

     {children}

    </CartContext.Provider>
    )

}
