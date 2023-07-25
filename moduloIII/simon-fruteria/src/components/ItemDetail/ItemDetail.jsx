import React from 'react'

const ItemDetail = ({products}) => {
  return (
    <div>
    <img src={products.image} alt="" width={40} height={40} />
    <h2>Nombre del producto: 
    {products.nombre}</h2>
    <p> Caracteristicas: {products.caracteristica}</p>
    <p>Categoria: {products.category}</p>
   
  </div>
  )
}

export default ItemDetail