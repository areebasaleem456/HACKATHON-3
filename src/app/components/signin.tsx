import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

const Signin = () => {
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
            Sign in Page
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">Home </a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">SignIn</a>
          </div>
        </div>
      </div>
    </div>
    <div className='h-auto bg-white p-6 max-w-lg mx-auto shadow-lg rounded-lg'>
       <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Sign In</h1>
       <div className='flex-row flex items-center mb-4 border-2 border-solid border-gray-300 py-2'> 
        <Image src={"/User.png"} height={15} width={20} alt='user' ></Image>
        <input type="text" placeholder=' Name'  />
       </div>
       <div className=' flex-row flex items-center mb-4 border-2 border-solid border-gray-300 py-2'>
        <Image src={"/EnvelopeSimple.png"} height={15} width={20} alt='envelope'></Image> 
        <input type="text" placeholder=' E-mail'   />
       </div>
       <div className='flex flex-row items-center mb-4 border-2 border-solid  border-gray-300 py-2'> 
        <Image src={"/Lock.png"} height={15 } width={20} alt='password'></Image>
        <input  type="password" placeholder=' Password' className="ml-3 p-2 w-full outline-none border-none text-gray-800 focus:ring-2 focus:ring-orange-700" />
       </div>
       <div className='flex flex-row'>
        <div className='h-4 w-4 bg-orange-700 flex items-center justify-center '><TiTick /></div>
        <h2 className='text-black ml-2'>Remember Me</h2>
       </div>
       <button className='w-full bg-orange-700 text-white h-10 md:w-full rounded-md shadow-md hover:bg-orange-800 transition duration-300 mb-4 mt-4'>Sign In</button>
       <h2 className='text-gray-600 font-medium flex justify-end'>Forgot Password?</h2>
       <hr className='mb-4'/>
       <h1 className='text-gray-600 font-normal text-center ml-7'>OR </h1>
       <hr className='mb-4'/>
       <div className='flex border-2 border-solid border-gray-300 w-full h-10 py-2 px-2 '>
       <Image src={"/Google.png"} height={15} width={20} alt='google'></Image>
       <p className='text-black ml-3'>Continue With Google</p>
       </div>
       <div className='flex border-2 border-solid border-gray-300 w-full h-10 py-2 px-2 mt-3 '>
       <Image src={"/Apple.png"} height={15} width={20} alt='apple'></Image>
       <p className='text-black ml-3 '>Continue With Apple</p>
       </div>
    </div>
   </div>
  )
}

export default Signin