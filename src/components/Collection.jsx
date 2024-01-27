import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Collection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const intemsCollections = collection(db, "products")

    getDocs(intemsCollections).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
    })

  }, [])

  return (
    <div>Collection</div>
  )
}

export default Collection