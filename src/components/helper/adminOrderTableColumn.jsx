import { FaEdit, FaImage, FaTrashAlt } from "react-icons/fa";
import Modal from "../shared/Modal";
import { useState } from "react";


export const adminProductsTableColumn = (
  handleEdit,
  handleDelete,
  handleImageUpload,
  handleProductView
  ) => [
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "id",
    headerName: "ID",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Product ID</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "productName",
    headerName: "Product Name",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black text-center font-semibold border",
    cellClassName: "text-slate-700 text-center font-normal border",
    renderHeader:(params) => <span>Product Name</span>
  },
 { 
    sortable: true,
    disableColumnMenu:true,
    field: "price",
    headerName: "Price",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Price</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "quantity",
    headerName: "Quantity",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Quantity</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "specialPrice",
    headerName: "Price",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader:(params) => <span className='text-center'>Special Price</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "description",
    headerName: "Image",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className="ps-10">Description</span>,
    
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "image",
    headerName: "Image",
    Width: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className="ps-10">Image</span>,
    
  },{ 
    sortable: false,
    disableColumnMenu:true,
    field: "action",
    headerName: "Action",
    minWidth: 500,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Action</span>,
    renderCell : (params) => {
      return(
        <div className='flex justify-center items-center space-x-2 h-full'>
          <button 
            onClick={() => handleImageUpload(params.row)}
            className='flex items-center bg-green-500 hover:bg-green-600 transition duration-300 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaImage className='mr-2 '/>
              Image
          </button>
          <button 
            onClick={() => handleEdit(params.row)}
            className='flex items-center bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaEdit className='mr-2 '/>
              edit
          </button>
          <button 
            onClick={() => handleDelete(params.row)}
            className='flex items-center bg-red-500 hover:bg-red-600 transition duration-300 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaEdit className='mr-2 '/>
              Delete
          </button>
          <button 
            onClick={() => handleProductView(params.row)}
            className='flex items-center bg-gray-700 hover:bg-gray-800 transition duration-300 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaEdit className='mr-2 '/>
              View
          </button>
        </div>
      )
    }
  },
];


export const adminOrderTableColumn = (handleEdit) => [
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "id",
    headerName: "orderId",
    minWidth: 180,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Order ID</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "email",
    headerName: "Email",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black text-center font-semibold border",
    cellClassName: "text-slate-700 text-center font-normal border",
    renderHeader:(params) => <span>Email</span>
  },
 { 
    sortable: true,
    disableColumnMenu:true,
    field: "totalAmount",
    headerName: "Total Amount",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Total Amount</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "status",
    headerName: "Status",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span className='text-center'>Status</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "date",
    headerName: "Order Date",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader:(params) => <span className='text-center'>Order Date</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "action",
    headerName: "Action",
    minWidth: 250,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Action</span>,
    renderCell : (params) => {
      return(
        <div className='flex justify-center items-center space-x-2 h-full'>
          <button 
            onClick={() => handleEdit(params.row)}
            className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaEdit className='mr-2 '/>
              edit
          </button>
        </div>
      )
    }
  },
];

export const categoryTableColumns = (handleEdit, handleDelete) => [
  {
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "CategoryId",
    minWidth: 300,
    headerAlign: "center",
    align: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">CategoryId</span>,
  },
  {
    disableColumnMenu: true,
    field: "categoryName",
    headerName: "Category Name",
    align: "center",
    width: 400,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border ",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Category Name</span>,
  },

  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center",
    cellClassName: "text-slate-700 font-normal",
    sortable: false,
    width: 400,
    renderHeader: (params) => <span>Action</span>,
    renderCell: (params) => {
      return (
        <div className="flex justify-center space-x-2 h-full pt-2">
          <button
            onClick={() => handleEdit(params.row)}
            className="flex items-center bg-blue-500 text-white px-4 h-9 rounded-md "
          >
            <FaEdit className="mr-2" />
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(params.row)}
            className="flex items-center bg-red-500 text-white px-4   h-9 rounded-md"
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      );
    },
  },
];