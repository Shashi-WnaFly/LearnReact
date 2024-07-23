import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return <div className=" flex flex-col items-center">
        <h1 className="my-4 p-2 font-bold text-2xl">Cart Items</h1>
        <div className=" w-6/12 ">
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;