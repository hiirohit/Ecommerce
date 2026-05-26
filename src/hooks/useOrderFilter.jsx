import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getOrdersForDashboard } from '../store/actions/getOrdersForDashboard';

function useOrderFilter() {

     const [searchParams] = useSearchParams();
     const dispatch = useDispatch();
    
    useEffect(() => {
        const params = new URLSearchParams();
        const currentPage = searchParams.get("page") 
            ? Number(searchParams.get("page")) 
            : 1;
        params.set("pageNumber",currentPage - 1);
        
        const queryString = params.toString();
            
        dispatch(getOrdersForDashboard(queryString));
    
        },[searchParams,dispatch]);
    
  return (
    <div>useOrderFilter</div>
  )
}

export default useOrderFilter