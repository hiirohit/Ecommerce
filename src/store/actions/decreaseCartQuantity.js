export const DecreaseCartQuantity = 
        (data, newQuantity) => 
        (dispatch, getState) => {
           dispatch({
                type:"ADD_CART",
                payload:{...data, quantity: newQuantity},
           });
           localStorage.setItem("cartItems",JSON.stringify(getState().carts.cart));

}