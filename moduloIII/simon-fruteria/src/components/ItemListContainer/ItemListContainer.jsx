import { useEffect, useState } from 'react'
import { AskProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

 const [products, setProducts] =useState([]);
const {category} = useParams();

useEffect(() => {
  const categoryFunction = category ? getProductsByCategory : AskProducts;
  categoryFunction(category)
    .then(res => setProducts(res)) 
    .catch(err => console.log(err))
       

}, [category])

  return (
    <>
      <h2>Conocenos! </h2>
       <ItemList products={products} /> 
 </>
  )
  }
export default ItemListContainer