"use client"
import React from 'react'
import Image from 'next/image'

const Error = () => {
  return (
    <div className='bg-white'>
        <div>
      {/* First Section: Image and Breadcrumb */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={"/cheekout.png"}
          alt="Banner Image"
          width={700}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
          
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            404 Error
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">Home </a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">404</a>
          </div>
        </div>
      </div>
    </div>
    <div className='h-96 bg-slate-100'>
    <h1 className=' flex text-orange-700 text-4xl font-bold justify-center pt-14'>404</h1>
    <h2 className='text-black flex justify-center pt-4 font-semibold text-2xl'>Oops.. Looks likes something going wrong.</h2>
    <p className='text-gray-900 flex justify-center pt-2 font-light'>Page cannot find.. we will have to figured out it no time.</p>
    <p className='text-gray-900 font-light flex justify-center pt-2'>Meanwhile cheek out these fresh ideas:</p>
    <button className='bg-orange-700 h-10 w-32 flex justify-center p-2 ml-[650px] mt-10'>Go To Home</button>
    </div>
    </div>
  )
}

export default Error