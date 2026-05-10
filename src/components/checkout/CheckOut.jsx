import React, { useEffect, useState } from 'react'
import {Button, Skeleton, Step, StepLabel, Stepper} from "@mui/material"
import AddressInfo from './AddressInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAddresses } from '../../store/actions/getUserAddresses';
import toast from 'react-hot-toast';
import ErrorPage from '../shared/ErrorPage';
function CheckOut() {
    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const {isloading, errorMessage} = useSelector((state) => state.error)
    const {address, selectedUserAddress} = useSelector((state) => state.auth)
    const paymentMethod = false
    const HandleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }
    const HandleNext = () => {
        if(activeStep === 0 && !selectedUserAddress){
            toast.error("Please select checkOut address before proceeding.")
        }
        if(activeStep === 1 && (!selectedUserAddress || !paymentMethod)){
            toast.error("Please select payment address before proceeding.")
            return;
        }
        setActiveStep((prevStep) => prevStep + 1);
    }
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
        {isloading ? (
            <div className='lg:w-[80%] mx-auto py-5'>
                <Skeleton />
            </div>
        ) : (
            <div className='mt-5'>
                {activeStep === 0 && <AddressInfo address={address}/>}
            </div>
        )}
        
        <div className='flex justify-between items-center px-4 fixed z-50 h-24 bottom-0 bg-white w-full left-0 py-4 border-slate-300
                        ' style={{boxShadow: " 0 -2px 4px rgba(100, 100, 100, 0.15)"}}>
        <Button
            variant='outlined'
            disabled={activeStep === 0}
            onClick={HandleBack}>
            back
        </Button>
        {activeStep !== steps.length - 1 && (
            <button 
                disabled={errorMessage || (
                                ( activeStep === 0 ? !selectedUserAddress 
                                    : activeStep === 1 ? !paymentMethod 
                                    : false
                                )
                            )
                        }
                className={`bg-blue-500 font-semibold px-6 h-10 rounded-md text-white
                            ${errorMessage || 
                                (activeStep === 0 && !selectedUserAddress) ||
                                (activeStep === 1 && !paymentMethod) 
                                ? "opacity-60" : ""
                            }`}
                onClick={HandleNext}>
                Proced
            </button>
        )}
        </div>
    {errorMessage && <ErrorPage message={errorMessage}/>}        
    </div>
  )
}

export default CheckOut