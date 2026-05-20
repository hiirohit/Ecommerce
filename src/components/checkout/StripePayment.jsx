import { Alert, AlertTitle, Skeleton } from '@mui/material'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paymentform from './Paymentform';
import { createStripePaymentSecret } from '../../store/actions/createStripePaymentSecret';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripePayment() {
    const dispatch = useDispatch();
    const {clientSecret} = useSelector((state) => state.auth);
    const {totalPrice} = useSelector((state) => state.carts);
    const {isloading, errorMessage} = useSelector((state) => state.error);
    const {user} = useSelector((state) => state.auth);
    const selectedUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
            ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
            : [];
    
    useEffect(()=> {
        console.log("any")
        console.log(user.username)
        console.log(selectedUserCheckoutAddress)
        if(!clientSecret){
            const sendData = {
                amount: Number(totalPrice) * 100,
                currency: "USD",
                email: user.email,
                name: user.username,
                address: selectedUserCheckoutAddress,
                description:`Order for ${user.email}`,
                metadata:{
                    test:"1",
                }
            }
            dispatch(createStripePaymentSecret(sendData));
        }
    },[clientSecret]);
    if(isloading){
        return(
            <div className='max-w-lg mx-auto'>
                <Skeleton/>
            </div>
        )
    }

    return (
     <>
        {clientSecret && (
            <Elements stripe={stripePromise} options={{clientSecret}}>
                <Paymentform clientSecret={clientSecret} totalPrice={totalPrice}/>
            </Elements>
        )}
     </>
  )
}

export default StripePayment