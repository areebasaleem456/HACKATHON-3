"use client";
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { Chef } from '../../../types/chefs';
import { client } from '@/sanity/lib/client';
import { allChefs } from '@/sanity/lib/queries';
import { urlFor } from '../../sanity/lib/image';
import Link from 'next/link';





const Ourchefs = () => {
    const [chef , setChef] = useState<Chef[]>([]);

    const fetchchefs = async() =>{
      const fetchchefs :Chef[]= await client.fetch(allChefs);
      setChef(fetchchefs);
    }
    useEffect(() =>{
      fetchchefs();
    },[]);



  return (
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

      {/* Chef Section */}
      <div className="pt-20 h-auto border shadow-2xl pb-10 bg-white">
        {/* Map through chefs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
          {chef.map((chef, index) => (
            
            <div key={index} className="text-center">
              <Link href={`/chef/${chef.slug.current}`}>
              {chef.image && (
              <Image
                src={urlFor(chef.image).url()}
                height={300}
                width={300}
                alt={chef.name}
                className="mx-auto"
              /> )}
              </Link>
              <h3 className="font-semibold text-black text-lg  pt-2">{chef.name}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ourchefs
