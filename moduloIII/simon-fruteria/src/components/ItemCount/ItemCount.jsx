

import React from 'react'
import './ItemCount.css'

const ItemCount = ({cantidad, handleAdd, handleRest, handleCart}) => {
   


  return (   
    <div className="item-count">
      <div>
      <button onClick={handleAdd}>+</button> 
      <p>{cantidad}</p>
      <button onClick={handleRest}>-</button> 
    </div>
    <button className="AddCart" onClick={handleCart}>Add to cart </button>    
    </div>
  )
}

 export default ItemCount;