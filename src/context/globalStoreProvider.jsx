import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "admin", id: 42});

    const addProductToCart = (prod) => {
        console.log("Global add product", prod);

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    const removeProductToCart = () => {
        console.log("Global remove product");
    }

    return ( 
        <StoreContext.Provider 
        value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductToCart
        }}
        >
            {props.children}
        </StoreContext.Provider>
    );
}

export default GlobalStoreProvider;