"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { Food } from "../../../types/foods";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2"
import foods from "@/sanity/schemaTypes/foods";


const Shoplist = () => {
  const [food, setFood] = useState<Food[]>([]);
  // const [cart, setCart] = useState<Food[]>([]);

  const fetchProducts = async () => {
    const fetchProducts: Food[] = await client.fetch(allProducts);
    setFood(fetchProducts);
  };
  
   const handleAddToCart = (e:React.MouseEvent, food:Food) =>{
    e.preventDefault();
    Swal.fire({
      position:"top-right",
      icon:"success",
      title:`${food.name} Added To Cart.`,
      showConfirmButton:false,
      timer:1000
    })
    addToCart(food)
    
   }
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white pb-10">
      {/* picture shop */}
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
              Our Shop
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* sort by */}
      <div className="flex flex-col md:flex-row bg-white py-14 px-4 md:px-20">
        \
        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0 ">
          <h2 className="text-black mt-2">Sort By:</h2>
          <input
            className="text-gray-800 border-2 border-solid border-gray-600 p-2"
            type="text"
            placeholder="Newest"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <h2 className="text-black ml-4 mt-2">Show:</h2>
          <input
            className="text-gray-800 border-2 border-solid border-gray-600 p-2"
            type="text"
            placeholder="Default"
          />
        </div>
      </div>

      {/* menu list and buttons */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="flex flex-col bg-white w-full md:w-3/4 px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {food.map((food) => (
              <div
                key={food._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/foods/${food.slug?.current}`}>
                  {food.image && (
                    <Image
                      src={urlFor(food.image).url()}
                      alt={food.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  )}
                </Link>

                <div className="mt-4">
                  <h2 className="text-lg font-medium text-black text-center">{food.name}</h2>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 ppx-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out w-36 ml-5 mt-5" onClick={(e)=>handleAddToCart(e, food)}>
                       Add To Cart
                  </Button>
                  
                  
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-6">
            <div className="h-11 w-11 border-4 border-orange-700 border-solid flex justify-center items-center">
              <Image
                className="pt-4 pl-2"
                src={"/leftarrow.png"}
                height={10}
                width={20}
                alt="arrow"
              />
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid text-orange-700 font-semibold text-2xl pt-1 pl-3">
              1
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid text-white font-semibold text-2xl pt-1 pl-3 bg-orange-700 ">
              2
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid text-orange-700 font-semibold text-2xl pt-1 pl-3">
              3
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid flex justify-center items-center">
              <Image
                className="pt-4 pl-2"
                src={"/rightarrow.png"}
                height={20}
                width={20}
                alt="arrow"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 px-4 md:px-10">
          {/* Search */}
          <div className="flex flex-row mb-6">
            <input
              className="border-2 border-gray-500 border-solid py-2 pl-4 bg-orange-100 w-full"
              type="text"
              placeholder="Search Products"
            />
            <div className="h-[42px] w-11 bg-orange-700 border-2 border-orange-700 border-solid flex justify-center items-center">
              <Image
                className="pt-2 pl-2"
                src={"/MagnifyingGlass.png"}
                height={30}
                width={30}
                alt="search icon"
              />
            </div>
          </div>

          {/* Category */}
          <div className="text-black mb-6">
            <h2 className="text-black font-semibold text-lg">Category</h2>
            {[
              "Sandwiches",
              "Burger",
              "Chicken Chup",
              "Drink",
              "Pizza",
              "Non-Veg",
              "Uncategorized",
            ].map((category, idx) => (
              <div key={idx} className="flex flex-row gap-3 mt-2">
                <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
                <h2 className="font-normal mt-1">{category}</h2>
              </div>
            ))}
          </div>

          {/* Latest Products */}
          <div className="text-black">
            <h2 className="font-semibold text-lg mt-4">Latest Products</h2>
            <div className="mt-4 flex flex-row">
              <div>
                <Image
                  className="h-[80px] w-[80px]"
                  src={"/product-20.png"}
                  height={90}
                  width={70}
                  alt="latest product"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-normal text-lg ml-3">Pizza</h2>
                <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                </div>
                <p className="ml-3 text-gray-800 pt-2">$35.00</p>
              </div>
            </div>
            <div className="mt-4 flex flex-row">
              <div>
                <Image
                  className="h-[80px] w-[80px]"
                  src={"/product-20.png"}
                  height={90}
                  width={70}
                  alt="latest product"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-normal text-lg ml-3">Cupchake</h2>
                <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                </div>
                <p className="ml-3 text-gray-800 pt-2">$35.00</p>
              </div>
            </div>
            <div className="mt-4 flex flex-row">
              <div>
                <Image
                  className="h-[80px] w-[80px]"
                  src={"/product-20.png"}
                  height={90}
                  width={70}
                  alt="latest product"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-normal text-lg ml-3">Cookies</h2>
                <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                </div>
                <p className="ml-3 text-gray-800 pt-2">$35.00</p>
              </div>
            </div>
            <div className="mt-4 flex flex-row">
              <div>
                <Image
                  className="h-[80px] w-[80px]"
                  src={"/product-20.png"}
                  height={90}
                  width={70}
                  alt="latest product"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-normal text-lg ml-3">Burger</h2>
                <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-orange-700" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                  <RiStarSFill size={20} className="text-gray-500" />
                </div>
                <p className="ml-3 text-gray-800 pt-2">$35.00</p>
              </div>
            </div>
          </div>
          {/* Products Tags */}
          <h2 className="font-bold text-2xl mt-8 text-black">Products Tags</h2>
          <div className="flex flex-row text-gray-700 underline underline-[gray-700] mt-4 font-medium text-lg">
            <div className="flex flex-col">
              <div>Services</div>
              <div className="pt-4">Cupcakes</div>
              <div className="pt-4">Our Shops</div>
            </div>
            <div className="flex flex-col ml-4">
              <div>Our Menu</div>
              <div className="pt-4 text-orange-700 underline underline-[orange-700]">
                Burger
              </div>
              <div className="pt-4">Tandoori Chicken</div>
            </div>
            <div className="flex flex-col">
              <div>Pizza</div>
              <div className="pt-4">Cookies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoplist;
