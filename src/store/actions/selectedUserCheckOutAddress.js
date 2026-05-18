export const selectedUserCheckOutAddress = (address) => {
    localStorage.setItem("CHECKOUT_ADDRESS",JSON.stringify(address))
    return{
        type: "SELECT_CHECKOUT_ADDRESS",
        payload: address, 
    }
}