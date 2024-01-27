import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

    const [idProductos, setIdProductos] = useState([])

    return (
       
      
      <CartContext.Provider value={{idProductos, setIdProductos}}>
        {children}
      </CartContext.Provider>
      
        
      )

}
export default ShoppingCartProvider