import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { stripePaymentConfirmation } from '../../store/actions/stripePaymentConfirmation';
import toast from 'react-hot-toast';

function PaymentConfirmation() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(" ");
    const {cart} = useSelector((state) => state.carts);
    const {selectedUserCheckoutAddress} = useSelector((state) => state.auth);
    const {isloading, setIsLoading} = useState(false);

    const paymentIntent = searchParams.get("payment_intent");
    const clientSecret = searchParams.get("payment_intent_client_secret");
    const redirectStatus = searchParams.get("redirect_status");
   
    useEffect(() =>{
        if( paymentIntent && 
            clientSecret &&
            redirectStatus &&
            cart && 
            cart?.length > 0
        ) {
            const sendData = {
                addressId : selectedUserCheckoutAddress.addressId,
                pgName:"Stripe",
                pgPaymentId:paymentIntent,
                psStatus:"succeeded",
                pgResponseMessage:"Payment Successful"
                
            }
            console.log(sendData);
            console.log(selectedUserCheckoutAddress);
            dispatch(stripePaymentConfirmation(sendData, setErrorMessage, setIsLoading, toast))
        }
    },[paymentIntent, clientSecret, redirectStatus, cart])

    return (
    <div className='min-h-screen flex items-center justify-center'>
        { isloading ? (
            <div className='max-w-xl mx-auto'>
                <Skeleton/>
            </div>
        ) : (
            <div className='p-8 rounded-lg shadow-lg text-center max-w-md mx-auto'>
                <div className='text-green-500 mb-4 flex justify-between'>
                    <FaCheckCircle size={64}/>
                </div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                    Payment Successfull!
                </h2>
                <p>
                    Thank you for purchase! your payment was successfull, and we're
                    processing your order
                </p>
            </div>
        )}
    </div>
  )
}

export default PaymentConfirmation