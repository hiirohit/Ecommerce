import React, { useState } from 'react'
import {HiOutlineTrash} from 'react-icons/hi'
import SetQuantity from './SetQuantity';
import { useDispatch } from 'react-redux';
import { increaseCartQuantity } from '../../store/actions/increaseCartQuantity';
import toast from 'react-hot-toast';
import { DecreaseCartQuantity } from '../../store/actions/decreaseCartQuantity';
import { removeFromCart } from '../../store/actions/removeFromCart';
import { formatPrice } from '../../utils/formatPrice';
import truncate from "../../utils/truncate"
function ItemContent({
    productId,
    productName,
    image,
    descripation,
    quantity,
    price,
    discount,
    specialPrice,
    cartId,
}) {

    const [currentQuantity , setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();
    const handleQtyIncrease = (cartItems) => {
        dispatch(increaseCartQuantity(
            cartItems,
            toast,
            currentQuantity,
            setCurrentQuantity
        ));
    }
    const handleQtyDecrease = (cartItems) => {
        if(currentQuantity > 1){
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            dispatch(DecreaseCartQuantity(
            cartItems,
            newQuantity
        ));
        }
    }
    const removeItemFromCart = (cartItems) => {
        dispatch(removeFromCart(cartItems, toast))
     }
  return (
    <div className='grid md:grid-cols-5 grid-cols-4 md:text-md text-sm gap-4 items-center border border-slate-200'>
        <div className='md:col-span-2 justify-self-start flex flex-col gap-2'>
            <div className='flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start'>
                <h3 className='lg:text-[17px] text-sm font-semibold text-slate-600'>
                    {truncate(productName)}
                </h3>

            </div>
            <div className='md:w-36 sm:w-24 w-12 '>
                <img src={image} alt={productName} className='md:h-36 sm:h-24 h-12 w-full object-cover rounded-md'/>
            
            <div className='flex items-start gap-5 mt-3'>
                <button className='flex items-center font-semibold space-x-2 px-4 py-1 text-xs border border-rose-600 text-rose-600 rounded-md hover:bg-red-50 transition duration-200'
                        onClick={()=> removeItemFromCart({
                             productId,
                            productName,
                            image,
                            descripation,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            cartId,
                        })}
                        >
                    
                    <HiOutlineTrash size={16} className='text-rose-600'/> 
                    remove
                </button>
                </div>
            </div>
        </div>       
        <div className='justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold'>
            {formatPrice(Number(specialPrice))}
        </div> 
        <div className='justify-self-center'>
            <SetQuantity 
                    quantity={currentQuantity}
                    cardCounter={true}
                    handleQtyIncrease={()=> handleQtyIncrease({
                          productId,
                            productName,
                            image,
                            descripation,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            cartId,
                    })}
                    handleQtyDecrease={()=>{handleQtyDecrease({
                        productId,
                            productName,
                            image,
                            descripation,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            cartId,
                    })}}
                    />
        </div> 
        <div className='justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold'>
            {formatPrice(Number(currentQuantity) * Number(specialPrice))    }
        </div>
    </div>
  )
}

export default ItemContent