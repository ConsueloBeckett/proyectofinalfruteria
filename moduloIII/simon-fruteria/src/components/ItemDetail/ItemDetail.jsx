import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'



const ItemDetail = ({nombre, id, caracteristica, category}) => {

  const [products, setProducts] = useState([])
 
 
  return (
    <div>
    <h3>Nombre del producto: 
    {nombre}</h3>
    <p> Caracteristicas: {caracteristica}</p>
    <p>Categoria: {category}</p>
   <footer><ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log("agregado")}/></footer>
  </div>
  )
}

export default ItemDetail