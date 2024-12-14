import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetReactIcons from "./CartWidgetReactIcons";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function NavbarReactBootstrap() {
    const { cartQuantity } = useCart();

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand to="/" as={NavLink} className="navbar-brand">
                    CoderShop
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            to="/"
                            as={NavLink}
                            className="nav-link"
                            activeStyle={{ backgroundColor: "#ff6f61", color: "#fff" }}
                        >
                            Home
                        </Nav.Link>
                        <NavDropdown
                            title="Productos"
                            id="basic-nav-dropdown"
                            className="nav-link"
                        >
                            <NavDropdown.Item as={NavLink} to="/products/almacen">
                                Almacen
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/postres">
                                Postres
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/limpieza">
                                Limpieza
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/congelados">
                                Congelados
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/frutaverdura">
                                Frutas y Verduras
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/lacteos">
                                Lácteos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/products/bebidas">
                                Bebidas
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <NavLink to="/cart" style={{ textDecoration: "none" }}>
                        <div className="cart-icon-container">
                            <CartWidgetReactIcons />
                            {cartQuantity > 0 && (
                                <span className="cart-quantity">{cartQuantity}</span>
                            )}
                        </div>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarReactBootstrap;