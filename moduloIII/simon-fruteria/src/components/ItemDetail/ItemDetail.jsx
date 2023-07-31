import React from 'react'
import ItemCount from '../ItemCount/ItemCount'




const ItemDetail = ({nombre, id, caracteristica, category, image}) => {

  return (
    <div>
      <img src={image} alt={nombre} width={40} height={40}></img>
    <h3>Nombre del producto: 
    {nombre}</h3>
    <p> Caracteristicas: {caracteristica}</p>
    <p>Categoria: {category}</p>
   <footer><ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log("agregado")}/></footer>
  </div>
  )
}

export default ItemDetail