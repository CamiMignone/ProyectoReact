import React from "react"
import { useCart } from "../context/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

const CartList = () => {
    const { cart, cartTotal, clear } = useCart()
    return (
        <div className="cart-list-container">
            {cart.map((prod) => <CartItem key={prod.id} prod={prod} />)}
            <div className="cart-summary">
                <span className="total">Total a pagar: ${cartTotal()}</span>
                <div className="cart-actions">
                    <button className="btn btn-danger" onClick={clear}>Borrar Carrito</button>
                    <Link className="btn btn-success" to="/checkout">Terminar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default CartList