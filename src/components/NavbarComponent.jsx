import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to="/">Coder Shop</NavLink>
            <NavLink className="aLink" to="/products/limpieza">Limpieza</NavLink>
            <NavLink className="aLink" to="/products/postres">Postres</NavLink>
            <NavLink className="aLink" to="/products/almacen">Almacen</NavLink>
            <NavLink className="aLink" to="/products/congelados">Congelados</NavLink>
            <NavLink className="aLink" to="/products/frutaverdura">Frutas y verduras</NavLink>
            <NavLink className="aLink" to="/products/lacteos">Lacteos</NavLink>
            <NavLink className="aLink" to="/products/bebidas">Bebidas</NavLink>
            <NavLink className="aLink" to="/cart"><CartWidget counter={15}/></NavLink>
        </nav>
    )
}

export default NavbarComponent