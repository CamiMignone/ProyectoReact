import React, { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const onAddHandler = () => {
        onAdd(count)
    }

    return (
        <div>
            <div className="item-count-buttons">
                <button className="item-count-button item-count-button-decrease" onClick={restar}>-</button>
                <span className="btn">{count}</span>
                <button className="item-count-button item-count-button-increase" onClick={sumar}>+</button>
            </div>
            <button 
                className="item-count-button item-count-button-reset" 
                onClick={onAddHandler} 
                disabled={stock === 0 || count === 0}>
                Comprar
            </button>
        </div>
    )
}

export default ItemCount

