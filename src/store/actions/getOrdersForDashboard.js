import api  from "../../api/api"
export const getOrdersForDashboard = (queryString, isAdmin) => async (dispatch) => {
    try{
        dispatch({
            type: "IS_FETCHING"
        })
        const endpoint = isAdmin ? "/admin/orders" : "/seller/orders" 
        const {data}  = await api.get(`${endpoint}?${queryString}`);
        dispatch({
            type: "GET_ADMIN_ORDERS",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({
            type: "IS_SUCCESS"
        });
    }catch(error){
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch Orders"
        })
    }
};