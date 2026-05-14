import api  from "../../api/api"

export const getUserCart = () => async (dispatch, getState) => {
    try{
        dispatch({type:"IS_FETCHING"});
        const {data} = await api.get('/carts/user/cart');
        dispatch({
            type:"GET_USER_CART_PRODUCT",
            payload: data.products,
            totalPrice: data.totalPrice,
            cartId: data.cartId,
        })
        localStorage.setItem("cartItems",JSON.stringify(getState().carts.cart));
        dispatch({type: "IS_SUCCESS"})
    }catch(error){
        console.log(error);
        dispatch({
            type:"IS_ERROR",
            payload: error?.response?.data?.message || "Failed to getUser cart items"
        });
    }
}