import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const { id } = useParams()



  const [product, setProduct] = useState([])


  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db, "productos", id)



    getDoc(oneItem).then((snapshot) => {

      if (snapshot.exists()) {
        const doc = { ...snapshot.data(), id: snapshot.id }
        setProduct(doc)
      }


    })

  }, [])


  return (
    <ItemDetail
      product={product}
    />
  )
}

export default ItemDetailContainer