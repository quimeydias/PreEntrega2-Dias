import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const { id } = useParams()

    const getProduct = async () => {

        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        return data
    }

    const [product, setProduct] = useState([])


    useEffect(() => {
        getProduct().then((product) => setProduct(product))

    }, [])


    return (
        <ItemDetail
            product={product}
        />
    )
}

export default ItemDetailContainer