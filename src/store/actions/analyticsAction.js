import api from "../../api/api";

export const analyticsAction = () => async(dispatch,getState) => {
    try {
        dispatch({
            type: "IS_FATCHING"
        });
        const {data} = await api.get("/admin/app/analytics");
        dispatch({
            type: "FETCH_ANALYTICS",
            payload: data,
        });
        dispatch({
            type:"IS_SUCCESS"
        });
    } catch (error) {
        dispatch({
            type:"IS_ERROR",
            payload: error?.response?.data?.message || " Failed to fatch analytics data"
        })
    }
}