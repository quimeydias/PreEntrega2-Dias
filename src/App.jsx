import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import NavBar from "./components/NavBar.jsx"
import {BrowserRouter, Routes , Route} from "react-router-dom"


const App = () => {
     const texto = "Bienvenido"
  return (
    <BrowserRouter>
       <NavBar/>


       <Routes>
         
         <Route exact path="/"  element={<ItemListContainer/>} />
         <Route exact path="/category/:id"  element={<ItemListContainer/>} />
         <Route exact path="/item/:id"  element={<ItemDetailContainer/> } />

     

       </Routes> 


   </BrowserRouter>

  )
}

export default App