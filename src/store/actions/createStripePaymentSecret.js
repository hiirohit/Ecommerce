import toast from "react-hot-toast"
import api from "../../api/api"

export const createStripePaymentSecret = (totalPrice) => async (dispatch,getState) => {
    try {
        dispatch({
            type: "IS_FETCHING"
        })
        const {data} = await api.post("/order/stripe-client-secret",{
            "amount": Number(totalPrice) *100,
            "currency":"usd"
        })
         dispatch({
            type: "CLIENT_SECRET",
            payload:data
        })
        localStorage.setItem("client-secret",JSON.stringify(data));
         dispatch({
            type: "IS_SUCCESS"
        })
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message || "Failed to create client Secret")
    }
}