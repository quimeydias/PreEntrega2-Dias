import React, { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'

const Form = () => {
    const { idProductos, setIdProductos } = useContext(CartContext)



    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()


        addDoc(orderCollection, order).then(({ id }) =>
            setOrderId(id))
        setIdProductos([])


    }



    const order = {
        cliente: { nombre, email },
        items: idProductos
    }
    const orderCollection = collection(db, "orden")



    return (
        <section className="productos">
            <div className='Login'>

                {orderId ? "Tu codigo es: " + orderId :


                    <form className="form" action="" onSubmit={handleSubmit}>
                        <div class="divF">
                            <label id="label1" className="labelF" for="input1">Usuario</label>
                            <input type="text" className="inputF" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        </div>
                        <div class="divF">
                            <label id="label1" className="labelF" for="input1">Correo</label>
                            <input type="text" className="inputF" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <button type='submit' className='botonF'>Enviar</button>


                    </form>

                }
            </div>


        </section>
    )
}

export default Form