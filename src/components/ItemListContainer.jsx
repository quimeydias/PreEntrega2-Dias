import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { id } = useParams()

  let id1 = "";

 if(id==undefined){
   id1="products"
 }else{
   id1="products/category/"
   id1=id1+id
  
 }

  const getProducts = async () => {

    const response = await fetch(`https://fakestoreapi.com/${id1}`)
    const data = await response.json()
    return data
  }


  
  

  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    getProducts().then((product) => setProducts(product))

  }, [id])


  return (
    <section className="productos">



      <ItemList
        products={products}
      />


    </section>

  )
}

export default ItemListContainer