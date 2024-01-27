import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import NavBar from "./components/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingCartContext from "./context/ShoppingCartContext.jsx"
import CartContainer from "./components/CartContainer.jsx"
import Form from "./components/Form.jsx"


const App = () => {
  const texto = "Bienvenido"
  return (
    <ShoppingCartContext>
      <BrowserRouter>
        <NavBar />


        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartContainer />} />
          <Route exact path="/form" element={<Form />} />



        </Routes>


      </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App