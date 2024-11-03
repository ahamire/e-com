import { useEffect, useState } from 'react'
import './../App.css'
import { redirect, useParams, BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Product from './product';
import { create } from 'zustand';
import { Registered } from './register';

function  Currentproduct() {
  const navigate = useNavigate()
  const { name } = useParams()
  const [currentProduct, setCurrentProduct] = useState(null);
  const { isRegistered, toggleRegistered } = Registered();
  useEffect(() => {
    const Product = async()=>{
      setCurrentProduct(null)
      
      const response = await fetch(`https://fakestoreapi.in/api/products?limit=200`);
      const data = await response.json();
      // console.log(data.products);
      const current = data.products.filter((product: { title: string | undefined; })=>name==product.title)
      // console.log(current[0])
      setCurrentProduct(current[0]||null)
    } 
    Product()
  },[name]);
  if (!currentProduct) {
    return <div className='bg-green-300 w-fit rounded p-2'>Loading...</div>;
  }
  function showlogindialog() {
    if (isRegistered==false) {
      alert('Please log in to add this product to your cart.')
      return navigate('/dashboard')}
    else {
      console.log('Registered')
    }  
  }

  return (
    <>
      <div className='grid grid-cols-1 grid-rows-1 m-10 sm:grid-cols-2 '>
        
        <div className='max-w-sm w-full sm:max-w-full sm:flex'>
          <img className='w-20 sm:w-1/2 h-20 sm:h-auto object-cover pl-50 h-96' src={currentProduct.image} alt={currentProduct.title} />
        </div>
        <div className='px-6 py-4 text-sm text-gray-900'>
          <h2 className='text-xl font-bold'>{currentProduct.title}</h2>
          <p className='mt-1 text-gray-700'>{currentProduct.description}</p>
          <p className='mt-2 text-gray-500'>${currentProduct.price.toFixed(2)}</p>
          <button className='bg-green-700 text-white font-bold py-2 px-4 rounded-md' onClick={showlogindialog}>Add to Cart</button>
        </div>
      </div>
    </>)
}

export default Currentproduct
