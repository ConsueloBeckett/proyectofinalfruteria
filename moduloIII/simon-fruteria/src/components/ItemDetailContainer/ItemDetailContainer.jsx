import React, { useEffect, useState } from 'react'
import { getProductsById  } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [product, setProducts] = useState(null)

const {itemId} = useParams()
 

useEffect(() => {
  getProductsById(itemId)
    .then(res => {
        setProducts(res)
    })
    .catch(err => console.error(err))
    
},[itemId])
 
  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  ) 
  }

export default ItemDetailContainer