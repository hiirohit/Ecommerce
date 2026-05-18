
import api from "../../api/api"

export const stripePaymentConfirmation = ( sendData, setErrorMessage, setLoading, toast) => async (dispatch,getState) => {
    try {
       
        const data  = await api.post("/order/users/payments/online", sendData);
        console.log(data)
        if(data){
            console.log("inside")
            localStorage.removeItem("CHECKOUT_ADDRESS");
            localStorage.removeItem("cartItems");
            localStorage.removeItem("client-secret");
            dispatch({
            type: "REMOVE_CLIENT_SECRET_ADDRESS"
            })
            dispatch({
                type: "CLEAR_CART"
            })  
            toast.success("Order Accepted")
        } else{
            setErrorMessage("Payment Failed. Please try againg.")
        }
    } catch (error) {   
        console.log(error)
        setErrorMessage("Payment Failed. Please try againg.")
    }
};