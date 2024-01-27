import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'



const AddItemButton = ({ product }) => {

  console.log(product.title)
  const { idProductos, setIdProductos } = useContext(CartContext)

  const sumarP = () => {
    setIdProductos([...idProductos, product])
  }
  console.log(idProductos)

  return (
    <div onClick={sumarP} className="aCarrito" >Agregar al carrito</div>
  )
}

export default AddItemButton