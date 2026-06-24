import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"

import{useSearchParams} from "react-router-dom"
import { fetchProducts } from '../store/actions/fetchProducts';
import { dashboardProductAction } from '../store/actions/dashboardProductAction';
function useDashboardProductFilter() {
    const { user } = useSelector((state) =>  state.auth);
    const isAdmin = user && user?.roles.includes("ROLE_ADMIN");
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams();
        
        const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        params.set("pageNumber",currentPage - 1);
        
        const queryString = params.toString();
        dispatch(dashboardProductAction(queryString, isAdmin));

    },[searchParams,dispatch]);

  return (
    <></>
  )
}

export default useDashboardProductFilter