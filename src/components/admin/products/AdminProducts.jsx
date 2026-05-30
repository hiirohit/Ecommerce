import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {MdAddShoppingCart} from 'react-icons/md'
import { LoaderIcon } from 'react-hot-toast';
import { Skeleton } from '@mui/material';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductsTableColumn } from '../../helper/adminOrderTableColumn';
function AdminProducts() {

  
  const products = [{"productId":52,"productName":"ipad nor","image":"http/:sdjhgshc","description":"hig khduigcuisbcuibs","quantity":20,"price":1500.0,"discount":23.0,"specialPrice":1000.0}]
  const { pagination} = useSelector((state) => state.order);
  const emptyProduct = !products || products?.length === 0;
  const {isLoading, errorMessage } = useSelector((state) => state.error)
  const [currentPage,setCurrentPage] = useState(pagination?.pageNumber + 1 || 1)
  const TableRecords = products?.map((item) => {
          return{
            id: item.productId,
            productName: item.productName,
            description: item.description,
            discount: item.discount,
            image:item.image,
            price:item.price,
            quantity:item.quantity,
            specialPrice:item.specialPrice,
          }
        })
    const handleEdit = (product) => {

    }
    const handleDelete = (product) => {
      
    }
    const handleImageUpload = (product) => {
      
    }
    const handleProductView = (product) => {
      
    }
    const handlePaginationChange = (paginationModal) => {
    
    }

        

  return (
    <div className=''>
      <div className='pt-6 pb-10 flex justify-end'>
        <button className='bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300'>
          <MdAddShoppingCart className='text-xl'/>
          Add Product
        </button>
      </div>
      {!emptyProduct && (
        <h1 className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>
          All Products
        </h1>
      )}
      { isLoading ? (
        <Skeleton />
      ):(
        <>
        {emptyProduct ? (
          <div className='flex flex-col items-center justify-center text-gray-500 py-10'>
            <FaBoxOpen size={50} className='mb-3'/>
            <h2 className='text-2xl font-semibold'>
              No Product created yet!
            </h2>
          </div>
        ) : (
          <div className='max-w-full'>
            <DataGrid className='w-full'
                  rows={TableRecords}
                  columns={adminProductsTableColumn(
                      handleEdit, 
                      handleDelete,
                      handleImageUpload,
                      handleProductView
                    )}
                  paginationMode='server'
                  rowCount={pagination?.totalElements || 0}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: pagination?.pageSize || 10,
                        page: currentPage - 1,
                      },
                    },
                  }}
                  onPaginationModelChange={handlePaginationChange}
                  pageSizeOptions={[pagination?.pageSize || 10]}
                  checkboxSelection
                  pagination
                  disableRowSelectionOnClick
                  disableColumnResize
                  paginationOption = {{
                    showFirstButton : true,
                    showLastButton: true,
                    hideNextButton: currentPage === pagination?.totalPages,
                  }}
                  />
          </div>
        )}
        </>
      )}
    </div>
  )
}

export default AdminProducts