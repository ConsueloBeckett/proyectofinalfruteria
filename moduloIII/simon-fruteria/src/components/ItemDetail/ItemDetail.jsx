import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item_detail.css'




const ItemDetail = ({nombre, id, caracteristica, category, image}) => {

  return (
 
    <div className="container">
      <div className='item-image'>
      <img src={image} alt={nombre} width={60} height={60}></img></div>
      <div className='item-details'>
    <h3 className='item-name'>Nombre: 
    {nombre}</h3>
    <h4 className='item-description'> Caracteristicas: {caracteristica}</h4>
    <div  className='item-properties'>
    <p className='property-label'>Categoria: {category}</p>
    </div>
   <footer><ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log("agregado")}/></footer>
   </div>
  </div>
  
  )
}

export default ItemDetail