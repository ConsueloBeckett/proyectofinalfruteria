import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';



const ItemListContainer = () => {

 const [products, setProducts] =useState([]);
 const {categoryId} = useParams()
const [loading, setLoading] = useState(true);

useEffect(() => {
 setLoading(true)

const productRef = categoryId
? query(collection(db, 'products'), where ('category', '==', categoryId))
: collection(db, 'products')

getDocs(productRef)
.then(resp => {
const productsAdapt = resp.docs.map(doc => {
  const data = doc.data()
  return { id: doc.id, ...data}
})
setProducts(productsAdapt)

})
.catch (e =>{
  console.log(e)
})
.finally (() =>{
  setLoading(false)
})

}, [categoryId]);




  return (
    <>
      
       <ItemList products={products} /> 
 </>
  )
  }
export default ItemListContainer