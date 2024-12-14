import React, { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const ItemDetail = ({ producto }) => {
  const [compra, setCompra] = useState(false)
  const { addToCart } = useCart()
  const onAdd = (cantidad) => {
    setCompra(true)
    addToCart(producto, cantidad)
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image-container">
          <img src={producto.img} alt={producto.name} className="productDetailImage" />
        </div>
        <div className="item-detail-info">
          <h1>{producto.name}</h1>
          <p>{producto.description}</p>
          <h3>${producto.price}</h3>
          {compra
            ? <div className="item-detail-buttons">
              <Link className="btn btn-dark" to="/">Seguir comprando</Link>
              <Link className="btn btn-dark" to="/cart">Ir al carrito</Link>
            </div>
            : <ItemCount stock={producto.stock} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail