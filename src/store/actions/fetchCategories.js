import api  from "../../api/api"
export const fetchCategories = () => async (dispatch) => {
    try{
        dispatch({
            type: "CATEGORY_LOADER"
        })
        const {data}  = await api.get(`/public/categories`);
        dispatch({
            type: "FETCH_CATEFORIES",
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({
            type: "IS_ERROR"
        });
    }catch(error){
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories "
        })
    }
};