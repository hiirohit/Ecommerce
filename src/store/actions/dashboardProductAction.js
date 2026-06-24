import api  from "../../api/api"
export const dashboardProductAction = (queryString, isAdmin) => async (dispatch) => {
    try{
        dispatch({
            type: "IS_FETCHING"
        })
        const entpoint = isAdmin ? "/admin/products" : "/seller/products"
        const {data}  = await api.get(`${entpoint}?${queryString}`);
        dispatch({
            type: "FETCH_PRODUCTS",
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
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch dashboard products"
        })
    }
};