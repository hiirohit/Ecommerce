import api from "../../api/api";
import { dashboardProductAction } from "./dashboardProductAction";

export const updateProductImageFromDashboard = 
(formData, productId, toast, setLoader, setOpen) => async (dispatch) => {
    try {
        setLoader(true);
        await api.put(`/admin/products/${productId}/image`,formData)
        toast.success("Image upload successful.");
        setLoader(false)
        setOpen(false)
        await dispatch(dashboardProductAction());
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.description || "Product Image upload failed")
    }
}