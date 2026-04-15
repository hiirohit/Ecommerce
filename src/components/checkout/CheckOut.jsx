import React, { useState } from 'react'
import {Step, StepLabel, Stepper} from "@mui/material"
import AddressInfo from './AddressInfo';
function CheckOut() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        "Address",
        "Payment Method",
        "OrderSummary",
        "Payment",
    ]
  return (
    <div className='py-14 min-h-[calc(100vh-100px)]'>
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
                <Step key={index}>
                    <StepLabel>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
        <div className='mt-5'>
            {activeStep === 0 && <AddressInfo />}
        </div>
    </div>
  )
}

export default CheckOut