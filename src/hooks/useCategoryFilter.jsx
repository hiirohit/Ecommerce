import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/fetchCategories";


function useCategoryFilter() {

    const [searchParams] = useSearchParams(); 
    const dispatch = useDispatch(); 

    useEffect(() => {
        const params = new URLSearchParams(); // Create new URLSearchParams object

        // Get current page from URL search params, defaulting to 1 if not present
        const currentPage = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 1;
        params.set("pageNumber", currentPage - 1); // Pagination starts from 0 for API

        // Convert params to a query string
        const queryString = params.toString();

        dispatch(fetchCategories(queryString));
    }, [dispatch, searchParams]);
};

export default useCategoryFilter