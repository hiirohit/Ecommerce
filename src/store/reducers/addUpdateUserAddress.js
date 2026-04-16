import api from "../../api/api";

 export const addUpdateUserAddress = 
    (sendData, toast, addressId, setOpen) => async (dispatch, getState) => {
        
        dispatch({type:"BUTTON_LOADER"});
        try {
            const {data} = await api.post("/addresses",sendData);
            toast.success("Address saved successfully")
            dispatch({type:"IS_SUCCESS"})
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Internal Server error")
            dispatch({ type:"IS_ERROR", payload: null});
        }finally{
            setOpen(false)
        }
 }