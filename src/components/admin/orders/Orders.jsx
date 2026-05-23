import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import OrderTable from './OrderTable';

function Orders() {
    const emptyOrder = false;

  return (
    <div className='pb-6 pt-20'>
        {emptyOrder ? (
            <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
                <FaShoppingCart size={50} className='mb-3'/>
                <h2 className='text-2xl font-semibold'>No Orders Pleased yet!</h2>
            </div>
        ):(
            <OrderTable />
        )}
    </div>
  )
}

export default Orders