import api from '../../api/api'
import {getOrdersForDashboard} from './getOrdersForDashboard'
export const updateOrderStatuFromDashboard = (orderId,orderStatus,toast,setLoader,isAdmin) => async (dispatch,getState) => {
    try {
        setLoader(true)
        const endpoint = isAdmin ? "/admin/orders/" : "/seller/orders/" 
        const {data} = await api.put(`${endpoint}${orderId}/status`,{status:orderStatus});
        toast.success(data?.message || "Order updated successfully");
        await dispatch(getOrdersForDashboard());
    } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Full authentication is required");
    }finally{
        setLoader(false)
    }
}