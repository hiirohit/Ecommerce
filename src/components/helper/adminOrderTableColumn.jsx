import { FaEdit, FaImage, FaTrashAlt } from "react-icons/fa";
import Modal from "../shared/Modal";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";


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
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Product ID</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "productName",
    headerName: "Product Name",
    minWidth: 200,
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
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Price</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "quantity",
    headerName: "Quantity",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Quantity</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "specialPrice",
    headerName: "Price",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold text-center border",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader:(params) => <span>Special Price</span>
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "description",
    headerName: "Image",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span >Description</span>,
    renderCell: (params) => {
      return(
        <div
           style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          title={params.value}
          >
            {params.value}
        </div>
      )
    }
  },
  { 
    sortable: false,
    disableColumnMenu:true,
    field: "image",
    headerName: "Image",
    minWidth: 200,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader:(params) => <span>Image</span>,
    renderCell:(params) => {
      const imageUrl = params.value || "";
      const imageName = imageUrl.split("/").pop();
      return(
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "100%",
              }}
              title={imageName}
            > 
            {imageName}
          </div>
      )
    }
    
  },{ 
    sortable: false,
    disableColumnMenu:true,
    field: "action",
    headerName: "Action",
    minWidth: 500,
    headerAlign: "center",
    editable:false,
    headerClassName: "text-black font-semibold border",
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

export const sellerTableColumns = [
  {
    disableColumnMenu: true,
    field: "id",
    headerName: "ID",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    editable: false,

    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">SellerID</span>,
  },
  {
    disableColumnMenu: true,
    field: "username",
    headerName: "UserName",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">UserName</span>,
  },
  {
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    align: "center",
    width: 400,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border ",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Email</span>,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-center gap-1">
          <span>
            <MdOutlineEmail className="text-slate-700 text-lg" />
          </span>
          <span>{params?.row?.email}</span>
        </div>
      );
    },
  },
];