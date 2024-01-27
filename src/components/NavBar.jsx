import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'




const NavBar = () => {
  return (
    <nav className="nav">
      <div className="contenedorNav">

        <Link to={"/"} className="logo">
          <p className="imgLogo"></p>
        </Link>

        <Menu>
          <MenuButton className='menu'>
            Categorias
          </MenuButton>
          <MenuList>
            <Link to={"/category/electronics"}><MenuItem>Electronica</MenuItem></Link>
            <Link to={"/category/jewelery"}><MenuItem >Joyas</MenuItem></Link>
            <Link to={"/category/men's clothing"}><MenuItem>Ropa de hombre</MenuItem></Link>
            <Link to={"/category/women's clothing"}><MenuItem>Ropa de mujer</MenuItem></Link>
          </MenuList>
        </Menu>


        <div className="estilosBuscador">
          <form action="" method="get">
            <input className="buscador" name="buscar" type="text" placeholder="Buscá productos, categorías, marcas ..." required="" />
            <button className="lupa"></button>
          </form>

          <div className="seleccionados" id="seleccionados">
            <div className="seccionP" id="seccionP"></div>
          </div>


        </div>

        <a href="html/login.html" className="log">
          <p className="imgLog"></p>
        </a>

        <CartWidget />

      </div>
    </nav>
  )
}

export default NavBar