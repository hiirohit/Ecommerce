import {configureStore} from "@reduxjs/toolkit"; 
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";


//here i am getting data that store in browser localStorage.
const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")) 
    : null;

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : [] ;

const initialState = {
    auth : {user : user},
    carts : {cart : cartItems}
}

export const store = configureStore(
    {
        reducer:{ 
            products: productReducer,
            error: errorReducer,
            carts: cartReducer,
            auth: authReducer,
        },
        preloadedState: initialState,
    }
);
export default store;