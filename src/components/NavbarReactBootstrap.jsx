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
        {/* Logo */}
        <Navbar.Brand to="/" as={NavLink} className="navbar-brand">
          <img src="https://files.oaiusercontent.com/file-6oHNZ7jWfi5w1pKxYBJ8Tm?se=2024-12-14T13%3A49%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D554ff3ee-2282-4edf-b86d-c4736963a911.webp&sig=F3ulwuAp7Jj6wziSmyNGLIAwIPw8970DOr5KvSIBOJE%3D" alt="CoderShop Logo" className="navbar-logo" />
          CoderShop
        </Navbar.Brand>

        {/* Toggle Button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Links */}
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

          {/* Cart Icon */}
          <NavLink to="/cart" style={{ textDecoration: "none" }}>
            <div className="cart-icon-container">
              <CartWidgetReactIcons />
              {/* Show cart quantity if greater than 0 */}
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