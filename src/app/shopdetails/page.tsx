"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Shopdetails = () => {
    let router = useRouter()
  return (
    <div className="bg-white text-black">
      {/* header image */}
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
              Shop Details
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Shop Details
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* main page */}
      <div>
      <div className="flex flex-row ml-40">
        {/* image content */}
        <div className="mt-20">
          <Image
            src={"/Image contant.png"}
            height={500}
            width={500}
            alt="image-contant"
          />
        </div>
        {/* side bar */}
        <div className="m-20 ">
          {/* instock */}
          <div className="flex flex-row gap-60">
            <div className="h-8 w-28 bg-orange-700 text-white pt-1 pl-2">
              In Stock
            </div>
            <div>
              <Image
                src={"/Group 1000002153.png"}
                height={100}
                width={100}
                alt="prev-next"
              />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-3xl mt-5 ">
              Yummy Chicken Chup
            </h2>
            <p className="w-96 mt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              excepturi illo eveniet nihil iure, earum harum necessity
            </p>
            <hr className="mt-5" />
            <p className="font-semibold text-xl mt-5">54.00$</p>
            <div className="flex flex- mt-2">
              <RiStarSFill className="text-yellow-600 " />
              <RiStarSFill className="text-yellow-600 ml-1" />
              <RiStarSFill className="text-yellow-600 ml-1" />
              <RiStarSFill className="text-yellow-600 ml-1" />
              <RiStarSFill className="text-yellow-600 ml-1" />
              <p className="ml-7 text-gray-700">| 5.0Ratings</p>
              <p className="ml-7 text-gray-700">| 22 Reviews</p>
            </div>
            <p className="mt-2 text-gray-700">Dictum/cursus/Risus</p>
            <div className=" flex flex-row mt-4">
              <div className="h-8 w-10 border-gray-700 border-2 border-solid text-gray-600 text-xl px-2 pr-2">
                -
              </div>
              <div className="h-8 w-10 border-gray-700 border-2 border-solid text-gray-600 text-xl px-2 pr-2 font-bold">
                1
              </div>
              <div className="h-8 w-10 border-gray-700 border-2 border-solid text-gray-600 text-xl px-2 pr-2">
                +
              </div>
              <div onClick={()=>(router.push("/cart"))}  className="h-10 w-40 border-orange-700 border-2 border-solid bg-orange-700 text-white ml-10 flex flex-row gap-4 cursor-pointer">
                <FaShoppingCart size={30} className="pt-2 " />{" "}
                <span className="pt-3">Add To Cart</span>
              </div>
            </div>
            <hr className="mt-5" />
          </div>
          {/* wishlist */}
          <div>
            <div className="flex flex-row mt-5">
              <div className="">
                <FaRegHeart />
              </div>
              <h2 className="ml-2">Add To Wishlist</h2>
              <div>
                <Image
                  className="ml-3"
                  src={"/Project Status.png"}
                  height={20}
                  width={20}
                  alt="projuct-status"
                />
              </div>
              <h2 className="ml-3">Compare</h2>
            </div>
            <h2 className="mt-3 text-gray-700">Category: Pizza</h2>
            <h2 className="mt-3 text-gray-700">Tag:Our Shop</h2>
            <div className="flex flex-row">
              <h2 className="text-gray-700 mt-3">Share:</h2>
              <div className="flex flex-row mt-3">
                <FaSquareYoutube size={20} className="ml-2" />
                <FaFacebook size={20} className="ml-2" />
                <FaTwitter size={20} className="ml-2" />
                <FaInstagram size={20} className="ml-2" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* bottom area main div*/}
      <div className="ml-40 mr-20">
        {/* description */}
         <div className="flex flex-row">
           <div className="h-10 w-36 bg-orange-700 text-white font-semibold pt-2 pl-2">
            Description
           </div>
           <h2 className="font-semibold ml-6 pt-2">Reviews (24)</h2>
         </div>
         {/* bottom arae */}
         <div>
          <p className="text-gray-700 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi accusamus animi repudiandae nisi dicta porro quasi quibusdam quia quae nostrum ducimus repellendus, pariatur dignissimos corporis quaerat facilis, explicabo architecto?
          Laborum eum quo ut fugit voluptatem, nisi ipsam numquam aliquam sit eos totam animi officiis eius explicabo nostrum cumque a tempore inventore. Accusamus possimus modi, velit rerum aliquam repellat voluptatum.
          </p>
          <p className="mt-7 text-gray-700 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque in blanditiis. Sequi ipsam exercitationem quia inventore incidunt possimus voluptatum asperiores! Corrupti accusantium enim, similique totam aperiam explicabo quaerat nemo!
          Laboriosam amet ea maxime minus quos? Necessitatibus corporis, ex rerum explicabo repellendus praesentium asperiores fugit recusandae vero voluptas totam dicta. Laudantium consectetur inventore similique cum iure delectus, quo perspiciatis quos?</p>
          <h2 className="text-xl font-medium mt-3">Key Benifits</h2>
          <ul className="text-gray-700 mt-3 ">
            <li className="">Lorem, ipsum dolor sit amet consectetur adipisicing </li>
            <li className="pt-1">Lorem, ipsum dolor sit amet consectetur adipisicing </li>
            <li className="pt-1 ">Lorem, ipsum dolor sit amet consectetur adipisicing </li>
            <li className="pt-1">Lorem, ipsum dolor sit amet consectetur adipisicing </li>
          </ul>
          <div className="flex justify-between  mt-10">
          <h1 className="font-semibold text-xl">Similar Products</h1>
          <Image src={"/Arrow icon.png"} height={50} width={80} alt="arrow icons"/>
          </div>
          <div className="flex flex-row mt-10 gap-5">
            <div>
            <Image src={"/Mask Group.png"} height={300} width={300} alt="fresh lime"/>
            <h1 className="font-semibold ">Fresh Lime</h1>
            <div className="flex flex-row gap-5">
             <p className="text-orange-700">$38.00</p>
             <p className="text-gray-700 line-through">$45.00</p>
            </div>
            </div>
            <div>
            <Image src={"/Mask Group (1).png"} height={300} width={300} alt="chicken muffin"/>
            <h1 className="font-semibold ">Chicken Muffin</h1>
            <p className="text-orange-700">$28.00</p>
            </div>
            <div>
            <Image src={"/Mask Group (2).png"} height={300} width={300} alt="burger"/>
            <h1 className="font-semibold ">Burger</h1>
            <p className="text-orange-700">$21.00</p>
            </div>
            <div>
            <Image src={"/Mask Group.png"} height={300} width={300} alt="fresh lime"/>
            <h1 className="font-semibold ">Fresh Lime</h1>
            <div className="flex flex-row gap-5 mb-10">
             <p className="text-orange-700">$38.00</p>
             <p className="text-gray-700 line-through">$45.00</p>
            </div>
            </div>
          </div>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Shopdetails;