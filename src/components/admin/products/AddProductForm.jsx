import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import InputField from '../../shared/InputField';
import { Button } from '@mui/material';
function AddProductForm({setOpen,product, update=false}) {
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState:{ errors }
    } = useForm({
        mode:"onTouched"
    });

    useEffect(() => {
        if(update && product){
            setValue("productName",product?.productName);
            setValue("price",product?.price);
            setValue("quantity",product?.quantity);
            setValue("discount",product?.discount);
            setValue("specialPrice",product?.specialPrice);
            setValue("description",product?.description);

        }
    },[update,product])
    return (
    <div className='py-5 relative h-full'>
        <form className='space-y-4'>
            <div className='flex md:flex-row flex-col gap-4 w-full'>
                <InputField
                    Lable="ProductName"
                    required
                    id="productName"
                    type="text"
                    message="this field is required"
                    register={register}
                    placeholder="Product Name"
                    errors={errors}/>
            </div>
            <div className='flex md:flex-row flex-col gap-4 w-full'>
                <InputField
                    Lable="Price"
                    required
                    id="price"
                    type="number"
                    message="this field is required"
                    register={register}
                    placeholder="Product Price"
                    errors={errors}
                    />
                    <InputField
                    Lable="Quantity"
                    required
                    id="quantity"
                    type="number"
                    message="this field is required"
                    register={register}
                    placeholder="Quantity"
                    errors={errors}
                    />
                    
            </div>
            <div className='flex md:flex-row flex-col gap-4 w-full'>
                <InputField
                    Lable="Discount"
                    required
                    id="discount"
                    type="number"
                    message="this field is required"
                    register={register}
                    placeholder="Product Discount"
                    errors={errors}
                    />
                    <InputField
                    Lable="SpecialPrice"
                    required
                    id="specialPrice"
                    type="number"
                    message="this field is required"
                    register={register}
                    placeholder="Special Price"
                    errors={errors}
                    />
                    
            </div>
            <div className='flex  flex-col gap-4 w-full'>
                <label htmlFor='desc' className='font-semibold text-sm text-slate-800 '>
                    Description
                </label>
                 <textarea 
                    rows={5}
                    placeholder="ADD Product Description..."
                    className=
                    {`px-4 py-2 border w-full outline-hidden bg-transparent text-slate-800 rounded-md ${
                            errors["description"]?.message ? "border-red-500" : "border-slate-700"
                        }`
                    }
                    {...register("description", {
                        required : {value: true, message:"Desccription is required"},
                    })}
                />
                {errors["description"]?.message && (
            <p className='text-sm font-semibold text-red-600 mt-0'>
                {errors["description"]?.message}
            </p>
        )}
            </div>
            <div className='flex w-full justify-between items-center absolute bottom-14'>
                            <Button 
                                disabled={loader}
                                onClick={() => setOpen(false)}
                                variant='outlined'
                                className='text-white py-10 text-sm font-medium'
                                >
                                    cancel
                            </Button>
                            <Button
                                disabled={loader}
                                type='submit'
                                variant='contained'
                                color='primary'
                                className='bg-blue-600 text-white py-10 text-sm font-medium'
                                >
                                    { loader ? (
                                        <div className='flex gap-2 items-center'>
                                            <FaSpinner/> Loading...
                                        </div>
                                    ) : (
                                        "Update"
                                    )}
                            </Button>
                        </div>
        </form>
    </div>
  )
}

export default AddProductForm