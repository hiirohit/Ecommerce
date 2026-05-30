import api from '../../api/api'
import {getOrdersForDashboard} from './getOrdersForDashboard'
export const updateOrderStatuFromDashboard = (orderId,orderStatus,toast,setLoader) => async (dispatch,getState) => {
    try {
        setLoader(true)
        const {data} = await api.put(`/admin/orders/${orderId}/status`,{status:orderStatus});
        toast.success(data?.message || "Order updated successfully");
        await dispatch(getOrdersForDashboard());
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Internal Server Error");
    }finally{
        setLoader(false)
    }
}