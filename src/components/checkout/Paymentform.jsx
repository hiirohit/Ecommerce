import { Skeleton } from '@mui/material';
import {useStripe,useElements, PaymentElement} from '@stripe/react-stripe-js'
import React, { useState } from 'react'

function Paymentform({clientSecret, totalPrice}) {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const{ error: submitError} = await elements.submit();
        const{ error} = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams:{
                return_url: `${import.meta.env.VITE_FRONTEND_URL}/order-confirm`,
            },    
        });
        if(error){
            setErrorMessage(error.message);
            return false;
        }
        
    };

    const paymentElementOption = {
        layout: "tabs",
    }

    const isloading = !clientSecret || !stripe || !elements;


  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4'>
        <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>
        {isloading ? (
            <Skeleton/>
            ) : (
                <>
                {clientSecret && <PaymentElement options={paymentElementOption}/> }
                {errorMessage && (
                    <div className='text-red-500'>{errorMessage}</div>
                )}
                <button 
                    className='text-white w-full px-5 py-[10px] bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse'
                    disabled={ !stripe || isloading}>
                    {!isloading ? `Pay $${Number(totalPrice).toFixed(2)}`
                                : "Processing"}
                </button>
                </>
            )}
    
    </form>    
)
}

export default Paymentform