import api from "../../api/api"
import { dashboardProductAction } from "./dashboardProductAction"

export const addNewProductFromDashboard = (sendData, toast, reset,setLoader,setOpen) => async (dispatch) => {
    try {
        setLoader(true)
        await api.post(`/admin/categories/${sendData.categoryId}/product`,sendData)
        toast.success("Product created successfully")
        reset();
        setLoader(false)
        setOpen(false)
        await dispatch(dashboardProductAction())
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.description || "Product creation failed")
    }
}