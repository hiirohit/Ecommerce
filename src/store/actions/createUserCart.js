import api  from "../../api/api"
import { getUserCart } from "./getUserCart";

export const createUserCart = (sendCartItems) => async (dispatch, getState) => {
    try{
        dispatch({type:"IS_FETCHING"});
        await api.post('/cart/create', sendCartItems);
        await dispatch(getUserCart());
    }catch(error){
        console.log(error);
        dispatch({
            type:"IS_ERROR",
            payload: error?.response?.data?.message || "Failed to create cart items"
        });
    }
}