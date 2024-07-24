import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItems());
    }
    return <div className=" flex flex-col items-center">
        <h1 className="my-4 p-2 font-bold text-2xl">Cart Items</h1>
        <button className=" px-4 py-2 rounded-md bg-blue-600 text-white shadow-gray-400 shadow-lg" onClick={handleClearCart}>Clear Cart</button>
        <div className=" w-6/12 ">
            <ItemList items={cartItems} />
        </div>
    </div>
}

export default Cart;