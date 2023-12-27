import React from 'react'

const ItemDetail = ({ product }) => {
    return (
        <>
            <section className="contProducto" >
                <div className="producto">
                    <div className="imgsProducto">
                        <div className="imgMuestra">
                            <div className="contImg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        </div>
                        <div className="imgMuestra">
                            <div className="contImg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        </div>
                        <div className="imgMuestra">
                            <div className="contImg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        </div>
                        <div className="imgMuestra">
                            <div className="contImg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        </div>
                    </div>
                    <div className="imgProdcuto">
                        <div className="contImgProducto" style={{ backgroundImage: `url(${product.image})` }}></div>
                    </div>
                    <div className="detallesProducto">
                        <div className="marca">Marca Desconocida</div>
                        <div className="titulo">{product.title}</div>
                        <div className="vendidoPor">Vendido por <a class="azul">China</a></div>
                        <div className="precio">{product.price}</div>
                        <div className="oferta">Hasta <strong>9 cuotas</strong> sin interés de $ 75.444,33</div>
                        <div className="comprar">Comprar ahora</div>
                        <div className="aCarrito" >Agregar al carrito</div>
                    </div>
                </div>
            </section>


            <section className="contInfoTecnica">
                <div className="infoTecnica">
                    <div className="titTecnica">Descripción del producto</div>
                    <div className="text" id="text">{product.description}</div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail