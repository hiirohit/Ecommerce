import { FaEdit } from "react-icons/fa";

export const adminOrderTableColumn = [
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
          <button className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md cursor-pointer'>
            <FaEdit className='mr-2 '/>
              edit
          </button>
        </div>
      )
    }
  },
];