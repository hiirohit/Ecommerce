export const removeFromCart = 
        (data, toast) => 
        (dispatch, getState) => {
            dispatch({
                type: "REMOVE_CART",
                payload: data
            });
            toast.success(`${data.productName} removed from cart`);
            localStorage.setItem("cartItems",JSON.stringify(getState().carts.cart));
        }