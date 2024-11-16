import React, { useState, useEffect, useLayoutEffect } from "react"
import ItemCount from "./ItemCount"
import { getProducts } from "../mock/data"
import Itemlist from "./ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const onAdd = (cantidad) => {
        alert("Agregaste al carrito " + cantidad + " productos")
    }

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setProducts(res))
            .catch((error) => console.log())
            .finally(() => setLoading(false))
    }, [])
    console.log(products)
    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Cargando...</p> : <Itemlist products={products} /> }


            <ItemCount stock={12} onAdd={onAdd} />
        </div>


    )
}

export default ItemListContainer