import api from "../../api/api"
import { dashboardProductAction } from "./dashboardProductAction"

export const updateProductFromDashboard = (sendData,toast, reset,setLoader,setOpen) => async (dispatch) =>{
    try {
        setLoader(true)
        await api.put(`/admin/products/${sendData.id}`,sendData)
        toast.success("Product update sucessful")
        reset();
        setLoader(false)
        setOpen(false)
        await dispatch(dashboardProductAction());
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.description || "Product update failed")
    }
}