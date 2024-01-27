import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const { id } = useParams()



  const [products, setProducts] = useState([])


  useEffect(() => {
    const db = getFirestore()
    const intemsCollections = collection(db, "productos")

    const q = id ? query(intemsCollections, where("category", "==", id)) : intemsCollections

    getDocs(q).then((snapshot) => {

      setProducts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })

      )


    })

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