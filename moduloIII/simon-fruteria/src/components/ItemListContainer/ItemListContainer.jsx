import { useEffect, useState } from 'react'
import AskProducts from '../AskProducts/AskProducts';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

 const [products, setProducts] =useState([]);


useEffect(() => {
    AskProducts()
    .then((res) => {
        setProducts(res)
    })

}, [])

  return (
    <div>
      
       <ItemList products={products} /> 
 </div>
  )
  };

export default ItemListContainer