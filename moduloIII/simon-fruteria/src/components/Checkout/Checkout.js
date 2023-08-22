import { useContext, useState } from "react";
import { CartContext }  from '../../context/CartContext'
import { useForm } from "react-hook-form";
import '../Checkout/Checkout.css'
import { collection , addDoc } from "firebase/firestore"
import { db } from '../../firebase/config' 

const Checkout = () => {

const [orderId, setOrderId] = useState('');

  const { cart, EmptyCart, totalPrice} = useContext(CartContext);
  const {register, handleSubmit } = useForm();

  const buy = (data) => {
    const order = {
      cliente: data,
      productos: cart,
      total: totalPrice()
    }
    console.log(order);

    const orderRef =  collection(db, "pedidos")
    addDoc(orderRef, order)
    .then((doc) =>{
      setOrderId(doc.id);
      EmptyCart();
    })

  }

  if(orderId){
    return(
      <div className="container">
        <h4 className="main-title"> Muchas gracias por su compra </h4>
        
        <p>Tu numero de pedido es: {orderId}</p>


      </div>
    )

  }

  return (
 <>

    <h1>Pedido</h1>
    <form className="form" onSubmit={handleSubmit(buy)}>

    <input type="text" placeholder="ingresa tu nombre" {...register("nombre")}/>
    <input type="text" placeholder="ingresa tu email" {...register("email")}/>
    <input type="text" placeholder="ingresa tu telefono" {...register("telefono")}/>

    <button className="enviar" type="submit">pedir</button>
    </form>


 </>
  )
}

export default Checkout