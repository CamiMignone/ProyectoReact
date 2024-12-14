import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../services/firebase"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState("")
    const [orderId, setOrderId] = useState("")
    const { cart, cartTotal, clear } = useContext(CartContext)
    
    const userData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.email || !user.address) {
            alert("Los campos son obligatorios")
        } else if (user.email !== validate) {
            alert("Los mails deben ser iguales")
        } else {
            let order = {
                buyer: user,
                carrito: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
        }
    }

    return (
        <div className="checkout-container">
            {orderId !== "" ? (
                <div className="order-confirmation">
                    <h4 className="confirmation-title">¡Generaste bien tu orden!</h4>
                    <h5 className="confirmation-text">El ID de tu compra es: <strong>{orderId}</strong></h5>
                    <Link to="/" className="btn btn-success go-home-btn">Volver a home</Link>
                </div>
            ) : (
                <div className="checkout-form-container">
                    <h4 className="checkout-title">Completa con tus datos</h4>
                    <form className="checkout-form" onSubmit={finalizarCompra}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Ingrese su nombre" 
                            onChange={userData} 
                            className="checkout-input" 
                        />
                        <input 
                            type="text" 
                            name="lastname" 
                            placeholder="Ingrese su apellido" 
                            onChange={userData} 
                            className="checkout-input" 
                        />
                        <input 
                            type="text" 
                            name="address" 
                            placeholder="Ingrese su dirección" 
                            onChange={userData} 
                            className="checkout-input" 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Ingrese su correo" 
                            onChange={userData} 
                            className="checkout-input" 
                        />
                        <input 
                            type="email" 
                            name="second-email" 
                            placeholder="Repita su correo" 
                            onChange={(e) => setValidate(e.target.value)} 
                            className="checkout-input" 
                        />
                        <button className="btn btn-success checkout-btn" type="submit">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Checkout