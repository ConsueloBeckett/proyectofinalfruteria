import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
const [products, setProducts] = useState(null)
const {idProduct} = useParams()

useEffect(() => {
  getProducts(idProduct)
    .then(res => {
        console.log(res)
        setProducts(res)
    })
    
},[idProduct])
 
  return products? (
    <div>
        <ItemDetail {...products}/>
    </div>
  ) : null
  }

export default ItemDetailContainer