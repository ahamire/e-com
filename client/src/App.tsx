import { useState } from 'react'
import './App.css'
import Header from './components/header';
import Product from './components/product';
import { useParams } from 'react-router-dom';
function App() {
  const { category } = useParams();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent 
              from-green-300 via-green-500 to-green-500 animate-text p-6">
            { category }
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Product/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
