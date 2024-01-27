import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ title, price, image, id }) => {



  return (
    <Link to={`/item/${id}`} className="tarjeta">
      <div className="imgTarjeta" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="imgNombre">
        <p>{title}</p>
      </div>
      <div className="imgPrecio">
        <p>{price}</p>
      </div>
    </Link>
  )
}

export default Item