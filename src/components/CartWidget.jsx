import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { idProductos } = useContext(CartContext)


  return (
    <Link to={"/cart"} className="carrito">
      <div className="imgCarrito">
        <div className="numeroProductos" id="numeroProductos">{idProductos.length}</div>
      </div>
    </Link>
  )
}

export default CartWidget