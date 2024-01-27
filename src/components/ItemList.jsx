import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {

    return (
        <div className="tarjetas">
            {
                products.map((p) => {
                    return (

                        <Item
                            id={p.id}
                            title={p.title}
                            price={p.price}
                            image={p.image}
                        />
                    )


                })
            }

        </div>
    )
}

export default ItemList