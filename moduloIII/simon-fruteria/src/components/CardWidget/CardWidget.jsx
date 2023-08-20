import React, { useContext } from 'react'
import { BiCartAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const CardWidget = () => {

  const { quantityCart } = useContext(CartContext);

  return (
    <div>
        <button>
        <NavLink to={"/cart"} className={({ isActive }) => isActive ? "active" : "option"}>
          <BiCartAlt/><strong>{quantityCart()}</strong></NavLink>

        </button>
    </div>
  )
}

export default CardWidget;  