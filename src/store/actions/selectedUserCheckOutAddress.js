export const selectedUserCheckOutAddress = (address) => {
    return{
        type: "SELECT_CHECKOUT_ADDRESS",
        payload: address, 
    }
}