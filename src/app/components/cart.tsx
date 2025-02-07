import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="text-black bg-white pb-20">
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
              Cart
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* div number1*/}
      <div className="flex flex-row mt-12">
        <h2 className="font-semibold text-xl ml-52">Product</h2>

        <h2 className="font-semibold text-lg ml-60">Price</h2>
        <h2 className="font-semibold text-lg ml-40">Quantity</h2>
        <h2 className="font-semibold text-lg ml-48">Total</h2>
        <h2 className="font-semibold text-lg ml-40">Remove</h2>
      </div>

      <div className="flex flex-row mx-32 mt-6 justify-around">
        <div className="flex flex-row">
          <Image src={"/product1.png"} height={70} width={70} alt="product1" />
          <div className="flex flex-col">
            <h2 className="font-medium pl-2 pt-2">Burger</h2>
            <div className="flex flex-row pt-2 pl-2">
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-gray-700" />
              <RiStarSFill size={20} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 pt-6">$35.00</p>

        <div className="pt-6">
          <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
            - 1 +
          </div>
        </div>

        <p className="pt-6 ">$221.00</p>

        <Image
          className="mt-6 h-[20px] w-[20px]"
          src={"/X.png"}
          height={20}
          width={20}
          alt="x"
        />
      </div>
      <hr className="mt-7" />
      {/* div number2 */}
      <div className="flex flex-row mx-32 mt-6 justify-around">
        <div className="flex flex-row">
          <Image src={"/product2.png"} height={70} width={70} alt="product2" />
          <div className="flex flex-col">
            <h2 className="font-medium pl-2 pt-2">Fresh Lime</h2>
            <div className="flex flex-row pt-2 pl-2">
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-gray-700" />
              <RiStarSFill size={20} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 pt-6">$25.00</p>

        <div className="pt-6">
          <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
            - 1 +
          </div>
        </div>

        <p className="pt-6 ">$521.00</p>

        <Image
          className="mt-6 h-[20px] w-[20px]"
          src={"/colorx.png"}
          height={20}
          width={20}
          alt="x"
        />
      </div>
      <hr className="mt-7" />
      {/* div number3 */}
      <div className="flex flex-row mx-32 mt-6 justify-around">
        <div className="flex flex-row">
          <Image src={"/item4.png"} height={70} width={70} alt="product3" />
          <div className="flex flex-col">
            <h2 className="font-medium pl-2 pt-2">Pizza</h2>
            <div className="flex flex-row pt-2 pl-2">
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-gray-700" />
              <RiStarSFill size={20} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 pt-6">$15.00</p>

        <div className="pt-6">
          <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
            - 1 +
          </div>
        </div>

        <p className="pt-6 ">$421.00</p>

        <Image
          className="mt-6 h-[20px] w-[20px]"
          src={"/X.png"}
          height={20}
          width={20}
          alt="x"
        />
      </div>
      <hr className="mt-7" />
      {/* div number4 */}
      <div className="flex flex-row mx-32 mt-6 justify-around">
        <div className="flex flex-row">
          <Image src={"/product4.png"} height={70} width={70} alt="product4" />
          <div className="flex flex-col">
            <h2 className="font-medium pl-2 pt-2">Chocolate Muffin</h2>
            <div className="flex flex-row pt-2 pl-2">
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-gray-700" />
              <RiStarSFill size={20} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 pt-6">$45.00</p>

        <div className="pt-6">
          <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
            - 1 +
          </div>
        </div>

        <p className="pt-6 ">$521.00</p>

        <Image
          className="mt-6 h-[20px] w-[20px]"
          src={"/X.png"}
          height={20}
          width={20}
          alt="x"
        />
      </div>
      <hr className="mt-7" />
      {/* div number5 */}
      <div className="flex flex-row mx-32 mt-6 justify-around">
        <div className="flex flex-row">
          <Image src={"/product4.png"} height={70} width={70} alt="product4" />
          <div className="flex flex-col">
            <h2 className="font-medium pl-2 pt-2">Cheese Butter</h2>
            <div className="flex flex-row pt-2 pl-2">
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-yellow-600" />
              <RiStarSFill size={20} className="text-gray-700" />
              <RiStarSFill size={20} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-gray-700 pt-6">$15.00</p>

        <div className="pt-6">
          <div className="h-8 w-28 border-gray-500 border-2 border-solid text-gray-700 text-center tracking-widest pt-1 rounded-3xl">
            - 1 +
          </div>
        </div>

        <p className="pt-6 ">$325.00</p>

        <Image
          className="mt-6 h-[20px] w-[20px]"
          src={"/X.png"}
          height={20}
          width={20}
          alt="x"
        />
      </div>
      <hr className="mt-7" />

      {/* coupon code */}
      <div className="flex flex-row ml-48 mt-10">
        <div>
          <h2 className="font-bold text-xl">Coupon Code</h2>
          <div className="h-[150px] w-[480px] rounded-md border-gray-300 border-2 border-solid flex flex-col mt-5 p-4 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabot init.
          <div className="flex flex-row">
            <input className="border-gray-300 border-2 border-solid mt-5 h-8 w-96 pl-4" type="text" placeholder="Enter Here Code" />
            <div className="h-8 w-12 bg-orange-700 mt-5 pt-1">Apply</div>
            </div>
          </div>
        </div>
        {/* totalbill */}
        <div>
            <h2 className="font-bold text-xl ml-5">Total Bill</h2>
            <div className="h-[150px] w-[500px] border-gray-300 border-2  border-solid ml-5 mt-5 rounded-md">
                <div className="flex justify-between">
                    <h2 className="font-semibold p-2">Cart Subtotal</h2>
                    <p className="font-semibold p-2">$120.00</p>
                </div>
                <div className="flex justify-between">
                    <h2 className="p-2">Shipping Charge</h2>
                    <p className="p-2">$00.00</p>
                </div>
               <hr className="mt-5" />
               <div className="flex justify-between">
                <h2 className="font-semibold p-2">Total Amount</h2>
                <p className="p-2 font-semibold">$205.00</p>
               </div>

            </div>
            <div className="h-11 ml-5 w-[500px] bg-orange-700 border-2 border-solid border-orange-700 p-3 font-medium mt-3">Proceed To Checkout
        
        </div>
        </div>
        
      
      </div>
      
    </div>
  );
};

export default Cart;
