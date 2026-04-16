import React, { useEffect, useState } from 'react'
import {Step, StepLabel, Stepper} from "@mui/material"
import AddressInfo from './AddressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAddresses } from '../../store/actions/getUserAddresses';
function CheckOut() {
    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const {address} = useSelector((state) => state.auth)
    const steps = [
        "Address",
        "Payment Method",
        "OrderSummary",
        "Payment",
    ]
    useEffect(() => {
        dispatch(getUserAddresses());
    },[dispatch]);
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
            {activeStep === 0 && <AddressInfo address={address}/>}
        </div>
    </div>
  )
}

export default CheckOut