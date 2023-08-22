import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
const [product, setProducts] = useState(null)

const [loading, setLoading] = useState(true);
const {itemId} = useParams()

useEffect(() => {
 setLoading(true)

const docRefs = doc(db, 'products', itemId)

getDoc(docRefs)
.then (resp => {
 const data = resp.data() 
  const productsAdapt = { id: resp.id, ... data}
  setProducts(productsAdapt)
})
.catch(e =>{
  console.log(e)
})
.finally(() => {
  setLoading(false)
})


},[itemId])
 
  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  ) 
  }

export default ItemDetailContainer