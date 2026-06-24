import api from "../../api/api";
import { dashboardProductAction } from "./dashboardProductAction";

export const updateProductImageFromDashboard = 
(formData, productId, toast, setLoader, setOpen, isAdmin) => async (dispatch) => {
    try {
        setLoader(true);
        const entpoint = isAdmin ? "/admin/products/" : "/seller/products/"
        await api.put(`${entpoint}${productId}/image`,formData)
        toast.success("Image upload successful.");
        setLoader(false)
        setOpen(false)
        await dispatch(dashboardProductAction());
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.description || "Product Image upload failed")
    }
}