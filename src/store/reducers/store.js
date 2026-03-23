import {configureStore} from "@reduxjs/toolkit"; 
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import { cartReducer } from "./cartReducer";

//here i am getting data that store in browser localStorage.
const cartItems = localStorage.getItem("cartItems")
                    ? JSON.parse(localStorage.getItem("cartItems")) 
                    : [] ;

const initialState = {
    carts : {cart : cartItems}
}

export const store = configureStore(
    {
        reducer:{ 
            products: productReducer,
            error: errorReducer,
            carts: cartReducer,
        },
        preloadedState: initialState,
    }
);
export default store;