import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import {Button, FormControl, FormHelperText, InputLabel,Select} from "@mui/material"
import { FaSpinner } from 'react-icons/fa';
import{ useDispatch } from "react-redux"
import { updateOrderStatuFromDashboard } from '../../../store/actions/updateOrderStatusFromDashboard';
import {toast} from 'react-hot-toast'
function UpdateOrderForm({open, setOpen, selectedId, selectedItem, loader, setLoader}) {
    const ORDER_STATUSES = [
        "Pending",
        "Processing",
        "shipped",
        "Delivered",
        "Cancelled",
        "Accepted",
    ];
    const [orderStatus, setOrderStatus] = useState(selectedItem?.status || "Accepted");
    const [error, setError] = useState();
    const dispatch = useDispatch();
    const updateOrderStatus = (e) =>{
         e.preventDefault();
        if(!orderStatus){
            setError("Order status is required");
            return;
        }
        dispatch(updateOrderStatuFromDashboard(
            selectedId,
            orderStatus,
            toast,
            setLoader

        ));

    }
    return (
    <div className='py-5 relative h-full'>
        <form className='space-y-4' onSubmit={updateOrderStatus}>
            <FormControl fullWidth variant='outlined' error={!!error}>
                <InputLabel id="order-status-label">Order Status</InputLabel>
                <Select 
                    labelId="order-status-label"
                    label='order Status'
                    value={orderStatus}
                    onChange={(e) => {
                        setOrderStatus(e.target.value)
                        setError("");
                    }}>
                        {ORDER_STATUSES.map((status) => (
                            <MenuItem 
                                key={status} value={status}
                                >
                                {status}

                            </MenuItem>
                        ))}

                </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
            <div className='flex w-full justify-between items-center absolute bottom-14'>
                <Button 
                    disabled={loader}
                    onClick={() => setOpen(false)}
                    variant='outlined'
                    className='text-white py-10 text-sm font-medium'
                    >
                        cancel
                </Button>
                <Button
                    disabled={loader}
                    type='submit'
                    variant='contained'
                    color='primary'
                    className='bg-blue-600 text-white py-10 text-sm font-medium'
                    >
                        { loader ? (
                            <div className='flex gap-2 items-center'>
                                <FaSpinner/> Loading...
                            </div>
                        ) : (
                            "Update"
                        )}
                </Button>
            </div>
        </form>
    </div>
  )
}

export default UpdateOrderForm