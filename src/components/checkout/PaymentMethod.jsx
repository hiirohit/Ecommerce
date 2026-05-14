import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaymentMethod } from '../../store/actions/addPaymentMethod';
import { createUserCart } from '../../store/actions/createUserCart';

function PaymentMethod() {
    const dispatch = useDispatch();
    const {paymentMethod} = useSelector((state) => state.payment);
    const {cart, cartId} = useSelector((state) => state.carts);
    const {isLoading, errorMessage} = useSelector((state) => state.error);
    
    useEffect(() => {
        if(cart.length > 0 && !cartId && !errorMessage){
            const sendCartItems = cart.map((item) => {
                return{
                    productId: item.productId,
                    quantity: item.quantity,
                }
            });
            dispatch(createUserCart(sendCartItems))
        }
    },[dispatch])

    const paymentMethodHandler = (method) => {
        dispatch(addPaymentMethod(method))
    }
    
    return (
    <div className='max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border'>
        <h1 className='text-2xl font-semibold mb-4'>
            Select PayMent Method
        </h1>
        <FormControl>
            <RadioGroup
                    aria-label='payment method'
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => paymentMethodHandler(e.target.value)}
                >
                    <FormControlLabel 
                        value="Stripe" 
                        control={<Radio color='primary'/>} 
                        label="stripe" 
                        />
                    <FormControlLabel 
                        value="Paypal" 
                        control={<Radio color='primay' />} 
                        label="Paypal" 
                        />
                </RadioGroup>
        </FormControl>
    </div>
  )
}

export default PaymentMethod