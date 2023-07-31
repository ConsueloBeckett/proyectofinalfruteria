import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

 const [products, setProducts] =useState([]);
 const {categoryId} = useParams()


useEffect(() => {
 const asyncFunction = categoryId ? getProductsByCategory : getProducts

  asyncFunction(categoryId)
    .then(res => {setProducts(res)
    }) 
    .catch(err => {console.log(err)
    }) 

}, [categoryId]);

  return (
    <>
      <h2>Conocenos! </h2>
       <ItemList products={products} /> 
 </>
  )
  }
export default ItemListContainer