import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';


const ItemListContainer = () => {

 const [products, setProducts] =useState([]);
 const {categoryId} = useParams()


useEffect(() => {

  const productsRef = collection(db, 'products');

  getDocs(productsRef)
  .then((resp) =>{
    console.log(resp)
  })

}, [categoryId]);

  return (
    <>
      
       <ItemList products={products} /> 
 </>
  )
  }
export default ItemListContainer