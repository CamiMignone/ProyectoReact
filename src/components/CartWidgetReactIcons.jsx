import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContext";
const CartWidgetReactIcons = () => {
    const { cartQuantity } = useCart()

    return (
        <div>
            <HiOutlineShoppingCart fontSize={"1.7rem"} />
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidgetReactIcons