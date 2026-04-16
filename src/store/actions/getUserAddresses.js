import api  from "../../api/api"
export const getUserAddresses = () => async (dispatch) => {
    try{
        dispatch({
            type: "IS_FETCHING"
        });
        const {data}  = await api.get(`/addresses`);
        dispatch({
            type: "USER_ADDRESS",
            payload: data,
            });
        dispatch({
            type: "IS_SUCCESS"
        });
    }catch(error){
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch User Addresses "
        })
    }
};