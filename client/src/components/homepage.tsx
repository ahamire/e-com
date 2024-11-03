import { useState } from 'react'
import './../App.css'
function Homepage() {

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className='text-5xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent 
              from-green-300 via-green-500 to-green-500 animate-text flex justify-center p-8'>Welcome to my shop </h1>
            <p className='flex justify-center'>here you can find all cool electronic stuff what you need from freezer to new iphone model or more things for gamers</p>
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent 
              from-green-300 via-green-500 to-green-500 animate-text">
            PROMOTION
          </h2>

          <div className="">
            <img src="./img/PS5.jpg" alt="" className='h-96 w-[900px]}'/>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
