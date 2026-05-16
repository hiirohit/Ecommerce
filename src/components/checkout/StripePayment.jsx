import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

function StripePayment() {
  return (
     <div className='h-96 flex justify-center items-center'>
            <Alert severity='warning' variant='filled' style={{maxWidth:"400px"}}>
                <AlertTitle>Stripe  UnAvailable</AlertTitle>
                <p>Stripe payment is unActive. Please use another payment method</p>
            </Alert>
        </div>
  )
}

export default StripePayment