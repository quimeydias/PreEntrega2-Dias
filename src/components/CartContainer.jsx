import React, { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import Cart from './Cart'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const { idProductos, setIdProductos } = useContext(CartContext)

    const vaciar = () => {

        setIdProductos([])

    }
    return (


        <section className="extra contProductoss">
            <div className="contProductoss1">



                {
                    idProductos.length > 0 ?

                        <>
                            <div className="scroll productosElegidos" id="productosElegidos">
                                <div className="seccionP2" id="seccionP2">
                                    {

                                        idProductos.map((p) => {
                                            return (

                                                <Cart
                                                    id={p.id}
                                                    title={p.title}
                                                    price={p.price}
                                                    image={p.image}
                                                />
                                            )


                                        })
                                    }
                                </div>
                            </div>


                            <div className="seccionEliminar" style={{ justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="eliminarTodo" onClick={vaciar} id="eliminarTodo" style={{ margin: '10px' }} >Eliminar todo</div>
                                <Link to={"/form"} className="eliminarTodo" style={{ backgroundColor: 'green' }} >Comprar</Link>

                            </div></> :


                        <>
                            <div className="scroll productosElegidos" style={{ width: '100%' }} id="productosElegidos">
                                <div className="seccionP2 nproductos" id="seccionP2" style={{ marginTop: '190px', marginBottom: "190px" }} >
                                    No tienes ningún producto en el carrito
                                </div>
                            </div>

                            <div className="seccionEliminar" >
                                <div className="eliminarTodo" style={{ display: 'none' }} onClick={vaciar} id="eliminarTodo">Eliminar todo</div>
                            </div>
                        </>



                }

            </div>
        </section>


    )
}

export default CartContainer