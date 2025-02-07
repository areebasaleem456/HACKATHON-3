import React from 'react'
import Image from 'next/image'

const Ourchefs = () => {
  return (
    <div>
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
                     Our Chefs
                   </h2>
                   <div className="flex items-center space-x-2 text-black">
                     <a href="/" className="text-white">
                       Home{" "}
                     </a>
                     <span className="text-white"> &gt; </span>
                     <a href="/about" className="text-orange-500">
                       Chefs
                     </a>
                   </div>
                 </div>
               </div>
             </div> 
             <div className='pt-20 h-auto bg-white'>
                <div className='flex flex-row mr-20 ml-20 justify-between'>
                <div>
                    <Image src={"/chef1.png"} height={300} width={300} alt='chef1'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Tahmina Rumi</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef2.png"} height={300} width={300} alt='chef2'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Jorina Begum</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef3.png"} height={300} width={300} alt='chef3'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>M.Mohammad </h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef4.png"} height={300} width={300} alt='chef4'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Munna Kathy</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                </div>
                <div className='flex flex-row mr-20 ml-20 justify-between'>
                <div>
                    <Image src={"/chef5.png"} height={300} width={300} alt='chef5'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Tahmina Rumi</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef6.png"} height={300} width={300} alt='chef6'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Bisnu Devgan</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef7.png"} height={300} width={300} alt='chef7'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Motin Molladsf</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef8.png"} height={300} width={300} alt='chef8'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>William Rumi</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                </div>
                <div className='flex flex-row mr-20 ml-20 justify-between'>
                <div>
                    <Image src={"/chef9.png"} height={300} width={300} alt='chef9'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Kets William Roy</h3>
                    <p className='text-black font-normal  text-center pt-2'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef10.png"} height={300} width={300} alt='chaef10'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Mahmud Kohlil</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef11.png"} height={300} width={300} alt='chef11'></Image>
                    <h3 className='font-semibold text-black text-center pt-2'>Ataur Rehman</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                <div>
                    <Image src={"/chef12.png"} height={300} width={300} alt='chef12'></Image>
                    < h3 className='font-semibold text-black text-center pt-2'>Monalisa Holly</h3>
                    <p className='text-black font-normal  text-center pt-1'>Chef</p>
                </div>
                </div>
             </div>
    </div>
  )
}

export default Ourchefs