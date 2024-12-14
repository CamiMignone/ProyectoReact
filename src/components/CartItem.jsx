import React from "react"
import { useCart } from "../context/CartContext"

const CartItem = ({ prod }) => {
    const { removeItem } = useCart()
    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={prod.img} alt={prod.name} className="cart-item-image" />
                <div className="cart-item-details">
                    <span className="cart-item-name">{prod.name}</span>
                    <span>Cantidad: {prod.cantidad}</span>
                    <span>Precio: ${prod.price},00</span>
                    <span>Precio final: ${prod.cantidad * prod.price},00</span>
                    <button className="btn btn-danger remove-item" onClick={() => removeItem(prod.id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem