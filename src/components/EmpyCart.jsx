import React from "react"
import { Link } from "react-router-dom"

const EmpyCart = () => {
    return (
        <div className="empty-cart-container">
            <h2>Tu carrito está vacío!</h2>
            <h4>Te invitamos a ver nuestros productos</h4>
            <Link to="/" className="btn btn-dark go-shopping-btn">Ir a comprar</Link>
        </div>
    )
}

export default EmpyCart