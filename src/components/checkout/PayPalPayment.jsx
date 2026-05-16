import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function PayPalPayment() {
  return (
    <div className='h-96 flex justify-center items-center'>
        <Alert severity='warning' variant='filled' style={{maxWidth:"400px"}}>
            <AlertTitle>Paypal  UnAvailable</AlertTitle>
            <p>Paypal payment is unActive. Please use another payment method</p>
        </Alert>
    </div>
  )
}

export default PayPalPayment