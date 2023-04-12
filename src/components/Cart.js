import FoodItem from "./FoodItems";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch=useDispatch();;
    const cartItems=useSelector(store=>store.cart.items);
    const handleClearItems=()=>{
        dispatch(clearCart());
    }

  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>
      <button className="bg-green-50" onClick={()=>handleClearItems()}>Clear Cart</button>
      <div className="flex">{cartItems.map((item)=><FoodItem key={item.id} {...item}/>)}</div>
    </div>
  );
};

export default Cart;
