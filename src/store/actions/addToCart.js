export const addToCart = (data, qty = 1, toast) => 
    (dispatch, getState) => {
        //find the product
        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );
        //check for stocks
        const isQuantityExist = getProduct.quantity >= qty;
        //if in stock -> add
        if(isQuantityExist){
            dispatch({type: "ADD_CART",payload:{...data,quantity: qty}});
            toast.success(`${data?.productName} added to the cart`);
            localStorage.setItem("cartItems",JSON.stringify(getState().carts.cart));
            
        }else{
            toast.error("Out of stack")
        }
}