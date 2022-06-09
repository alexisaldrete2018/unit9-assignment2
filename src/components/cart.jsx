import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const Cart = () => {

    let cart = useContext(StoreContext).cart;

    return(
        <div className="cart-page">
            <h1>You have {cart.length} items in your cart</h1>
            <h2>This is a cart page</h2>

            <div className="cart-list">
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>{product.title}: {product.price}</li>
                    ))}
                </ul>
            </div>

            
        </div>
    );
};

export default Cart;