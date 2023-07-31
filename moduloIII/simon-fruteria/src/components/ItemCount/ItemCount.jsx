import { useState } from 'react'
import React from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [number, setNumber] = useState(initial);

  const handleAdd = () => {
    if (number < stock) {
      setNumber(number + 1);
    }
  };

  const handleSub = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleReset = () => {
    setNumber(initial);
  };

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