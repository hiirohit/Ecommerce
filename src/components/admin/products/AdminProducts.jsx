import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {MdAddShoppingCart} from 'react-icons/md'
import toast, { LoaderIcon } from 'react-hot-toast';
import { Skeleton } from '@mui/material';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductsTableColumn } from '../../helper/adminOrderTableColumn';
import {useDispatch} from 'react-redux'
import useDashboardProductFilter from '../../../hooks/useDashboardProductFilter';
import Modal from '../../shared/Modal';
import AddProductForm from './AddProductForm';
import DeleteModal from '../../shared/DeleteModal';
import { deleteProduct } from '../../../store/actions/deleteProduct';
import ImageUploadForm from './ImageUploadForm';
function AdminProducts() {

  
  const {products, pagination} = useSelector((state) => state.products);
  const emptyProduct = !products || products?.length === 0;
  const {isLoading, errorMessage } = useSelector((state) => state.error)
  const [currentPage,setCurrentPage] = useState(pagination?.pageNumber + 1 || 1)
  const [openUpdateModal,setOpenUpdateModal] = useState(false);
  const [openAddModal,setOpenAddModal] = useState(false);
  const [openDeleteModal,setOpenDeleteModal] = useState(false);
  const [openImageUploadModal,setOpenImageUploadModal] = useState(false);
  const [selectedProduct,setSelectedProduct] = useState('');
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false)
  useDashboardProductFilter();
 
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
      setSelectedProduct(product)
      setOpenUpdateModal(true)
    }
    const handleDelete = (product) => {
      setSelectedProduct(product)
      setOpenDeleteModal(true)
    }
    const handleImageUpload = (product) => {
      setSelectedProduct(product)
      setOpenImageUploadModal(true)
    }
    const handleProductView = (product) => {
      
    }
    const handlePaginationChange = (paginationModal) => {
    
    }
    const onDeleteHandler = () => {
      dispatch(deleteProduct(toast,selectedProduct?.id,setLoader));
      setOpenDeleteModal(false)
    }
        

  return (
    <div className=''>
      <div className='pt-6 pb-10 flex justify-end'>
        <button
          onClick={() => setOpenAddModal(true)} 
          className='bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300'>
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
      <Modal 
        open={openUpdateModal || openAddModal}
        setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
        title={openUpdateModal ? 'Update Product' : "Add Product"}>
          <AddProductForm
            setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
            product={selectedProduct}
            update={openUpdateModal}
            />
      </Modal>
      <Modal 
        open={openImageUploadModal}
        setOpen={setOpenImageUploadModal}
        title="Add Product Image">
          <ImageUploadForm
            setOpen={setOpenImageUploadModal}
            product={selectedProduct}
            />
      </Modal>
      <DeleteModal 
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        loader={loader}
        title="Delete Product"
        onDeleteHandler={onDeleteHandler}/>
        
      
      
    </div>
  )
}

export default AdminProducts