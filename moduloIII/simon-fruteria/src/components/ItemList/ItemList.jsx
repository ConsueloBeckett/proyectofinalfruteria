import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    
    <div>
        { 
        products.length > 0 && 
        products.map((products) => {
    return(
       
           <Item products={products} key={products.id} />
       
           ) 
        })
     
        }</div>
  )
}

export default ItemList