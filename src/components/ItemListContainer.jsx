import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    const onAdd = (cantidad) =>{
        alert("Agregaste al carrito " + cantidad + " productos")
    }
    return(
        <div>
            <h1>{greeting}</h1>

            <ItemCount stock={12} onAdd = {onAdd} />
        </div>


    )
}

export default ItemListContainer