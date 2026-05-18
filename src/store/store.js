import {configureStore} from "@reduxjs/toolkit"; 
import { productReducer } from "./reducers/ProductReducer";
import { errorReducer } from "./reducers/errorReducer";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/authReducer";
import { paymentMethodReducer } from "./reducers/paymentMethodReducer";



//here i am getting data that store in browser localStorage.
const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth")) 
    : null;

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) 
    : [] ;

const initialState = {
    auth : {user : user },
    carts : {cart : cartItems}
}

export const store = configureStore(
    {
        reducer:{ 
            products: productReducer,
            error: errorReducer,
            carts: cartReducer,
            auth: authReducer,
            payment: paymentMethodReducer,
        },
        preloadedState: initialState,
    }
);
export default store;