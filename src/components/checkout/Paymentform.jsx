import { Skeleton } from '@mui/material';
import {useStripe,useElements, PaymentElement} from '@stripe/react-stripe-js'
import React, { useState } from 'react'

function Paymentform({clientSecret, totalPrice}) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
        console.log(e)
    };

    const paymentElementOption = {
        layout: "tabs",
    }


  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4'>
        <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>
        {loading ? (
            <Skeleton/>
            ) : (
                <>
                {clientSecret && <PaymentElement options={paymentElementOption}/> }
                {errorMessage && (
                    <div className='text-red-500'>{errorMessage}</div>
                )}
                <button disabled={ !stripe || loading}>
                    {!loading ? `Pay $${Number(totalPrice).toFixed(2)}`
                                : "Processing"}
                </button>
                </>
            )}
    
    </form>    
)
}

export default Paymentform