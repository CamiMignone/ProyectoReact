import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Badge } from "react-bootstrap";
const CartWidgetReactIcons = () =>{
    return(
        <div>
            <HiOutlineShoppingCart fontSize={"1.7rem"}/>
            <Badge bg="danger">15</Badge>
        </div>
    )
}

export default CartWidgetReactIcons