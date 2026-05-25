import {DataGrid} from '@mui/x-data-grid'
import React, { useState } from 'react'
import { adminOrderTableColumn } from '../../helper/adminOrderTableColumn'
import {useLocation, useNavigate, useSearchParams} from "react-router-dom"
function OrderTable({pagination,adminOrders}) {

  const [currentPage,setCurrentPage] = useState(pagination?.pageNumber + 1 || 1)
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const pathName = useLocation().pathname;
  const Navigate = useNavigate();
const TableRecords = adminOrders?.map((item) => {
  return{
    id: item.orderId,
    email: item.email,
    totalAmount: item.totalAmount,
    status: item.orderStatus,
    date:item.orderDate,
  }
})

const handlePaginationChange = (paginationModel) => {
  const page = paginationModel.page  + 1;
  setCurrentPage(page)
  params.set("page",page.toString());
  Navigate(`${pathName}?${params}`)
}  
  return (
    <div>
        <h1 className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>
            All Orders
        </h1>
        <div>
            <DataGrid className='w-full'
        rows={TableRecords}
        columns={adminOrderTableColumn}
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
    </div>
  )
}

export default OrderTable