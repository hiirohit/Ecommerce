export const addPaymentMethod = (method) => {
    return {
        type : "ADD_PAYMENT_METHOD",
        payload: method,
    }
}