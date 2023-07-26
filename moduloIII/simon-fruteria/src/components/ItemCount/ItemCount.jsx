import { useState } from 'react'
import React from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

 const [number, setNumber] = useState(0);

    const handleAdd = () => {
        setNumber(number+1);
    }
    const handleSub = () => {
        setNumber(number-1);    
    }
    const handleReset = () => {
        setNumber(0);
    }        

  return (
    <div><h3>Cantidad: {number}</h3>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleReset}>Reset</button>  
        <hr/>  
    </div>
  )
}

 export default ItemCount;