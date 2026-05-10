import { Skeleton } from '@mui/material';
import React, { useState } from 'react'
import{FaAddressBook} from "react-icons/fa"
import AddressInfoModal from './AddressInfoModal';
import AddAddressForm from './AddAddressForm';
import { useDispatch, useSelector } from 'react-redux';
import AddressList from './AddressList';
import DeleteModal from './DeleteModal';
import toast from 'react-hot-toast';
import { deleteUserAddress } from '../../store/actions/deleteUserAddress';
import { getUserAddresses } from '../../store/actions/getUserAddresses';
import { clearCheckoutAddress } from '../../store/actions/clearCheckOutAddress';
function AddressInfo({address}) {
    const [openAddressModal, setOpenAddressModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedAddress,setSelectedAddress] = useState("");
    
    const addNewAddressHandler = () => {
        setSelectedAddress("");
        setOpenAddressModal(true);
    }
    const dispatch = useDispatch();

    const deleteAddressHandler = () => {
        dispatch(deleteUserAddress(
            toast,
            selectedAddress?.addressId,
            setOpenDeleteModal,
            getUserAddresses,
            clearCheckoutAddress,
        ))
    }
    
    const noAddressExist = !address || address.lenght === 0;
    const {isLoading, btnLoader} = useSelector((state) => state.error);
    return (
    <div className='pt-4 '>
        {noAddressExist ? 
            (
                <div className='p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center'>
                   <FaAddressBook size={50} className='text-gray-500 mb-4' /> 
                   <h1 className='text-slate-900 text-center font-semibold text-2xl mb-2'>
                        No Address Added Yet
                    </h1>
                    <p className=' mb-6 text-slate-800 text-center'>
                        Please Add your Address to complete purchase
                    </p>
                    <button
                        onClick={addNewAddressHandler} 
                        className='px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-150'>
                        Add Address
                    </button>
                </div>
            ):(
                <div className='relative p-6 rounded-lg max-w-md mx-auto'>
                    <h1 className='text-slate-800 text-center font-bold text-2xl'>
                        Select Address
                    </h1>
                    {isLoading ? (
                        <div>
                            <Skeleton/>
                        </div>
                        ):(
                        <>
                            <div className='space-y-4  pt-6'>
                                <AddressList
                                    addresses={address}
                                    setSelectedAddress={setSelectedAddress}
                                    setopenAddressModal={setOpenAddressModal}
                                    setOpenDeleteModal={setOpenDeleteModal}/>
                            </div>
                            { address.length > 0 && (
                            <div className='mt-4'>
                                <button
                                    onClick={addNewAddressHandler} 
                                    className='px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-150'>
                                    Add Address
                                </button>
                            </div>
                            )}
                            </>
                        )}
                </div>
            )}
            <AddressInfoModal 
                open={openAddressModal}
                setOpen={setOpenAddressModal}
                >
                    <AddAddressForm 
                        address={selectedAddress} 
                        setOpen={setOpenAddressModal}/>
            </AddressInfoModal>
            <DeleteModal
                open={openDeleteModal}
                setOpen={setOpenDeleteModal}
                loader={btnLoader}
                title="Delete Address"
                onDeleteHandler={deleteAddressHandler}>
                
            </DeleteModal>
    </div>
  )
}

export default AddressInfo