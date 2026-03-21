import React, { useEffect } from 'react'
import { bannerImageOne } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/fetchProducts';
import ProductCard from './shared/ProductCard';

function About() {
    const {products} = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(fetchProducts());
        },[dispatch]);
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
        <h2 className='text-slate-800 text-4xl font-bold text-center mb-12'>
            About Us
        </h2>
        <div className='flex flex-col lg:flex-row justify-baseline items-center mb-12'>
            <div className='w-full md:w-1/2 text-center md:text-left'>
                <p className='text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis asperiores incidunt modi doloribus corrupti, in eos quidem reprehenderit quam! Dicta nemo aliquam officiis, ipsam architecto nostrum placeat quas nisi soluta.</p>
            </div>
            <div className='w-full md:w=1/2 mb-6 md:mb-0'>
                <img src={bannerImageOne} className='w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-75'></img>
            </div>
        </div>
        <div className='py-7 space-y-8'>
            <h1 className='text-slate-800 text-4xl font-bold text-center'>
                Our Products
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                 {products && 
            products?.slice(0,3)
            .map((item , i) => <ProductCard key={i} {...item} about />)}
            </div>
        </div>
    </div>
  )
}

export default About