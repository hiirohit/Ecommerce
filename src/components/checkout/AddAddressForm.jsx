import React from 'react'
import InputField from '../shared/InputField'
import { useForm } from 'react-hook-form';
import { FaAddressCard } from 'react-icons/fa';
import { useSelector} from 'react-redux'
function AddAddressForm() {
    const {btnLoader}= useSelector((state) => state.error);
    const {
            register,
            handleSubmit,
            reset,
            formState: {errors},
        } = useForm({
            mode: "onTouched",
        });
    const OnSaveAddressHandler = async () => {
            console.log("login clicked")
            // dispatch(authenticationSignInUser(sendData, toast, reset, navigate, setLoader));
        };
  return (
    <div className=''>
            <form
                onSubmit={handleSubmit(OnSaveAddressHandler)}
                className=''>
                    <div className='flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4'>
                        <FaAddressCard className='mr-2 text-2xl'/>
                        Add Address
                    </div>
                <div className='flex flex-col gap-4'>
                    <InputField 
                        Lable="BuildingName"
                        required
                        id="building"
                        type="text"
                        register={register}
                        errors={errors}
                        message="Building is required"
                        placeholder="Enter your building Name"
                    />
                    <InputField 
                        Lable="City"
                        required
                        id="city"
                        type="text"
                        register={register}
                        errors={errors}
                        message="City is required"
                        placeholder="Enter your city Name"
                    />
                    <InputField 
                        Lable="State"
                        required
                        id="state"
                        type="text"
                        register={register}
                        errors={errors}
                        message="State is required"
                        placeholder="Enter your state Name"
                    />
                    <InputField 
                        Lable="Pincode"
                        required
                        id="pincode"
                        type="text"
                        register={register}
                        errors={errors}
                        message="Pincode is required"
                        placeholder="Enter your Pincode Name"
                    />
                    <InputField 
                        Lable="Street"
                        required
                        id="street"
                        type="text"
                        register={register}
                        errors={errors}
                        message="Street is required"
                        placeholder="Enter your street Name"
                    />
                    <InputField 
                        Lable="Country"
                        required
                        id="country"
                        type="text"
                        register={register}
                        errors={errors}
                        message="Country is required"
                        placeholder="Enter your Country Name"
                    />
                </div>
                <button 
                    disabled={btnLoader}
                    type='submit'
                    className='text-white bg-custom-blue px-4 py-2 rounded-md mt-4'>
                        {btnLoader ? (
                            <div>Loading...</div>
                        ) : (
                            <div>Save</div>
                        )}
                        
                </button>
            </form>
    
        </div>
  ) 
}

export default AddAddressForm