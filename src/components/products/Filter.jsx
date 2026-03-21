import { FiArrowDown, FiArrowUp, FiRefreshCw, FiSearch } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, Toolbar } from '@mui/material'
import {useLocation, useNavigate, useSearchParams} from "react-router-dom"

function Filter({Categories}) {
   
    const [searchParams] = useSearchParams();
    const param = new URLSearchParams(searchParams);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();


    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");
    

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";
        setCategory(currentCategory);
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    },[searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            if(searchTerm){
                searchParams.set("keyword",searchTerm);
            }else{
                searchParams.delete("keyword");
            }
            navigate(`${pathname}?${searchParams.toString()}`);
        },700);
        return () => {
            clearTimeout(handler);
        }
    },[searchParams,searchTerm,navigate,pathname])

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if(selectedCategory === "all"){
            param.delete("category");
        }else{
            param.set("category",selectedCategory)
        }
        navigate(`${pathname}?${param}`)
        setCategory(event.target.value);
    };

    const toggleSortBy = () => {
        setSortOrder((prevOrder) => {
            const newOrder = (prevOrder === "asc") ? "desc" : "asc";
            param.set("sortby",newOrder);
            navigate(`${pathname}?${param}`);
            return newOrder;
        })
    };

    const handleClearFilter = () => {
        navigate({pathname : window.location.pathname});
        setCategory(" ");
    }



  return (
    <div className='flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4'>
        {/* Search bar */}
        <div className='relative flex items-center 2xl:w-112.5 sm:w-130 w-full'>
            <input  
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text" 
                    placeholder='search Products'
                    className='border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]'
                    />
                    <FiSearch className='absolute left-3 text-slate-800 size-4'/>
        </div>

        {/* Category Selection */}
        <div className='flex sm:flex-row flex-col gap-4 items-center'>
            <FormControl className='text-slate-800 border-slate-700'  
                variant='outlined'
                size='small'
                >
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        value={category}
                        onChange={handleCategoryChange}
                        label = "Category"
                        className='min-w-30 text-slate-800 border-slate-700'
                        >
                            <MenuItem value="all">All</MenuItem>
                            {Categories.map((item) => (
                                <MenuItem 
                                    key={item.categoryId}
                                    value={item.categoryName}
                                    >
                                    {item.categoryName}
                                </MenuItem>
                            ))}
                    </Select>
            </FormControl>
            {/* Sort Button and Clear Filter */}
            <Toolbar title = "Sorted by Price: asc">
                <Button onClick={toggleSortBy} variant='contained' color='primary' className='flex items-center gap-2 h-10'>
                    Sort By 
                    {sortOrder === "asc" ? (<FiArrowUp size={20}/>) : (<FiArrowDown size={20}/>)} 
                 </Button>
                 
            </Toolbar>
            <button onClick={handleClearFilter} className='flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md transition duration-300 ease-in shadow-md focus:outline-none'>
                <FiRefreshCw className='font-semibold' size={16}/>
                <span className='font-semibold'>Clear Filter</span>
            </button>
        </div>
    </div>
  )
}

export default Filter