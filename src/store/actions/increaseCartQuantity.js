
export const increaseCartQuantity = 
        (data, toast, currentQuantity, setCurrentQuantity) => 
        (dispatch, getState) => {
            //find the product
            const { products } = getState().products;
            console.log(data);
            console.log("products",products)
            const getProduct = products.find(
            (item) => item.productId === data.productId
        );

            const isQuantityExist = getProduct.quantity >= currentQuantity + 1;
            
            if(isQuantityExist){
                const newQuantity = currentQuantity + 1 ;
                setCurrentQuantity(newQuantity);
                dispatch({
                    type:"ADD_CART",
                    payload:{...data, quantity: newQuantity + 1},
                });
                localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
            }else{
                toast.error("Quantity Reached to limit")
            }

}