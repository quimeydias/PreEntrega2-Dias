import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = ({ title, price, image, id }) => {
    const { idProductos, setIdProductos } = useContext(CartContext)

    const eliminar = (idP) => {

        let productosF = idProductos.filter(producto => producto.id != idP);
        setIdProductos(productosF)

    }


    return (
        <a className="tarjeta">
            <div className="imgTarjeta" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="imgNombre">
                <p>{title}</p>
            </div>
            <div className="imgPrecio">
                <p>${price}</p>
            </div>

            <button className="eliminarProducto" id="eliminarProducto" onClick={(e) => eliminar(e.target.value)} value={id}></button>
        </a>

    )
}

export default Cart