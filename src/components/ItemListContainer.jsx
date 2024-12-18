import React, { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"

const ItemListContainer = ({ greeting, texto }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const productsCollection = category
            ? query(collection(db, "productos"), where("category", "==", category))
            : collection(db, "productos")
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProducts(list)
            })
            .catch((error) => (error))
            .finally(() => setLoading(false))
    }, [category])

    return (
        <div className="itemlist-container">
            <h1 className="greeting-title">{greeting}</h1>
            {category && <h2 className="category-title">{category}</h2>}
            <p className="category-description">{texto}</p>

            {loading ? <Loader /> : <ItemList products={products} />}
        </div>
    )
}
export default ItemListContainer