import api  from "../../api/api"
export const deleteUserAddress = (toast, addressId, setOpenDeleteModal, getUserAddresses,clearCheckoutAddress) => async (dispatch, getState) => {
    try{
        dispatch({
            type: "BUTTON_LOADER"
        });
        await api.delete(`/addresses/${addressId}`);
        dispatch({
            type: "IS_SUCCESS"
        });
        dispatch(getUserAddresses());
        dispatch(clearCheckoutAddress());
        toast.success("Address deleted successfully")
        
    }catch(error){
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Some Error Occured",
        });
    }
    finally{
        setOpenDeleteModal(false);
    }
};