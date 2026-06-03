import api  from "../../api/api"
import { dashboardProductAction } from "./dashboardProductAction";
export const deleteProduct = (toast, productId, setOpenDeleteModal,setLoader) => async (dispatch, getState) => {
    try{
        setLoader(true);
        await api.delete(`/admin/products/${productId}`);
        dispatch({
            type: "IS_SUCCESS"
        }); 
        toast.success("Product deleted successfully")
        await dispatch(dashboardProductAction());
        
    }catch(error){
        console.log(error)
        toast.error(error?.response?.data?.message || "Some Error Occured",)
    }
    finally{
        setOpenDeleteModal(false);
    }
};