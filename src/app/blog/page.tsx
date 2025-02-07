"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube , FaInstagram  , FaFacebook} from "react-icons/fa";

const Bloglist = () => {
  let router =useRouter()
  return (
    <div className="bg-white text-black pb-10">
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
              Blog List
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          {/* div1 */}
          <div className="ml-40 mt-20 w-[600px]">
            <Image
              className="h-[400px] w-[600px]"
              src={"/lemon.png"}
              height={300}
              width={500}
              alt="lemon"
            />
            <div className="flex flex-row mt-4 gap-2">
              <Image
                src={"/Calendar.png"}
                height={30}
                width={30}
                alt="calendar"
              />
              <p className="font-medium text-lg text-gray-700">
                Feb 14, 2022 /
              </p>
              <Image src={"/Chats.png"} height={30} width={30} alt="chats" />
              <p className="font-medium text-lg text-gray-700">3 /</p>
              <Image
                src={"/UserCirclePlus.png"}
                height={30}
                width={30}
                alt="chats"
              />
              <p className="font-medium text-lg text-gray-700">Admin</p>
            </div>
            <h2 className="font-bold text-2xl pt-3">
              10 reasons To Do A Digital Detox Challenge
            </h2>
            <p className="pt-5 text-gray-700 mr-32">
              At vero eos at id fugit eum labore. Optio labore ducimus ex, quis
              eum Maxime tempora voluptates odit. Laborum, aspernatur corporis
              voluptate architecto id fugit eum labore, Optio labore ducimus ex
              quis{" "}
            </p>
            <div className="h-8 w-36 border-orange-700 border-2 border-solid flex flex-row mt-3">
              <p className="p-1 text-orange-700 cursor-pointer pl-2 hover:underline">
                Read More
              </p>
              <Image
                src={"/ArrowLineUpRight.png"}
                height={5}
                width={20}
                alt="arrow line"
              />
            </div>
          </div>
          {/* div2 */}
          <div className="ml-40 mt-20 w-[600px]">
            <Image
              className="h-[400px] w-[600px]"
              src={"/pizza.png"}
              height={300}
              width={500}
              alt="lemon"
            />
            <div className="flex flex-row mt-4 gap-2">
              <Image
                src={"/Calendar.png"}
                height={30}
                width={30}
                alt="calendar"
              />
              <p className="font-medium text-lg text-gray-700">
                Feb 14, 2022 /
              </p>
              <Image src={"/Chats.png"} height={30} width={30} alt="chats" />
              <p className="font-medium text-lg text-gray-700">3 /</p>
              <Image
                src={"/UserCirclePlus.png"}
                height={30}
                width={30}
                alt="chats"
              />
              <p className="font-medium text-lg text-gray-700">Admin</p>
            </div>
            <h2 className="font-bold text-2xl pt-3">
              Traditional Soft Pretzels With Sweet Beer Cheese
            </h2>
            <p className="pt-5 text-gray-700 mr-32">
              At vero eos at id fugit eum labore. Optio labore ducimus ex, quis
              eum Maxime tempora voluptates odit. Laborum, aspernatur corporis
              voluptate architecto id fugit eum labore, Optio labore ducimus ex
              quis{" "}
            </p>
            <div className="h-8 w-36 border-orange-700 border-2 border-solid flex flex-row mt-3">
              <p onClick={()=>(router.push("/blogdetails"))}  className="p-1 pl-2 text-orange-700 cursor-pointer hover:underline">
                Read More
              </p>
              <Image
                src={"/ArrowLineUpRight.png"}
                height={5}
                width={20}
                alt="arrow line"
              />
            </div>
          </div>
          {/* div3 */}
          <div className="ml-40 mt-10 w-[600px]">
            <Image
              className="h-[400px] w-[600px]"
              src={"/hagover burger.png"}
              height={300}
              width={500}
              alt="lemon"
            />
            <div className="flex flex-row mt-4 gap-2">
              <Image
                src={"/Calendar.png"}
                height={30}
                width={30}
                alt="calendar"
              />
              <p className="font-medium text-lg text-gray-700">
                Feb 14, 2022 /
              </p>
              <Image src={"/Chats.png"} height={30} width={30} alt="chats" />
              <p className="font-medium text-lg text-gray-700">3 /</p>
              <Image
                src={"/UserCirclePlus.png"}
                height={30}
                width={30}
                alt="chats"
              />
              <p className="font-medium text-lg text-gray-700">Admin</p>
            </div>
            <h2 className="font-bold text-2xl pt-3">
              The Ultimate Hangover Burger:Egg in a Hole Burger
            </h2>
            <p className="pt-5 text-gray-700 mr-32">
              At vero eos at id fugit eum labore. Optio labore ducimus ex, quis
              eum Maxime tempora voluptates odit. Laborum, aspernatur corporis
              voluptate architecto id fugit eum labore, Optio labore ducimus ex
              quis{" "}
            </p>
            <div className="h-8 w-36 border-orange-700 border-2 border-solid flex flex-row mt-3">
              <p onClick={()=>(router.push("/blogdetails"))} className="p-1 pl-2 text-orange-700 cursor-pointer hover:underline">
                Read More
              </p>
              <Image
                src={"/ArrowLineUpRight.png"}
                height={5}
                width={20}
                alt="arrow line"
              />
            </div>
          </div>
          {/* div4 */}
          <div className="ml-40 mt-10 w-[600px]">
            <Image
              className="h-[400px] w-[600px]"
              src={"/slice beef.png"}
              height={300}
              width={500}
              alt="lemon"
            />
            <div className="flex flex-row mt-4 gap-2">
              <Image
                src={"/Calendar.png"}
                height={30}
                width={30}
                alt="calendar"
              />
              <p className="font-medium text-lg text-gray-700">
                Feb 14, 2022 /
              </p>
              <Image src={"/Chats.png"} height={30} width={30} alt="chats" />
              <p className="font-medium text-lg text-gray-700">3 /</p>
              <Image
                src={"/UserCirclePlus.png"}
                height={30}
                width={30}
                alt="chats"
              />
              <p className="font-medium text-lg text-gray-700">Admin</p>
            </div>
            <h2 className="font-bold text-2xl pt-3">
              My Favourite Easy Black Pizza Toast Recipe
            </h2>
            <p className="pt-5 text-gray-700 mr-32">
              At vero eos at id fugit eum labore. Optio labore ducimus ex, quis
              eum Maxime tempora voluptates odit. Laborum, aspernatur corporis
              voluptate architecto id fugit eum labore, Optio labore ducimus ex
              quis{" "}
            </p>
            <div className="h-8 w-36 border-orange-700 border-2 border-solid flex flex-row mt-3">
              <p onClick={()=>(router.push("/blogdetails"))}  className="p-1 pl-2 text-orange-700 cursor-pointer hover:underline">
                Read More
              </p>
              <Image
                src={"/ArrowLineUpRight.png"}
                height={5}
                width={20}
                alt="arrow line"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row gap-3 ml-[300px] mt-10">
            <div className="h-11 w-11 border-4 border-gray-400 border-solid">
              <Image
                className="pt-4 pl-2"
                src={"/leftarrow.png"}
                height={10}
                width={20}
                alt="arrow"
              />
            </div>
            <div className="h-11 w-11 border-4 border-gray-400 border-solid text-orange-700 font-semibold text-2xl pt-1 pl-3">
              1
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid  font-semibold text-2xl pt-1 pl-3 bg-orange-700 text-white">
              2
            </div>
            <div className="h-11 w-11 border-4 border-gray-400 border-solid text-orange-700 font-semibold text-2xl pt-1 pl-3">
              3
            </div>
            <div className="h-11 w-11 border-4 border-gray-400 border-solid">
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
        <div className="flex flex-col">
          {/* side bar */}
          <div className="flex flex-col ml-10">
            {/* search button */}
            <div className="flex flex-row">
              <div className="mt-20">
                <input
                  className="border-2 border-gray-400 border-solid py-2 pl-4 "
                  type="text"
                  placeholder="Search Your Keywords"
                />
              </div>
              <div className="h-[42px] w-11 bg-orange-700 border-2 border-orange-700 border-solid mt-20">
                <Image
                  className="pt-2 pl-2"
                  src={"/MagnifyingGlass.png"}
                  height={30}
                  width={30}
                  alt="search icon"
                />
              </div>
            </div>
            {/* profile card */}
            <div className="h-[330px] w-[280px] border-2 border-solid    border-gray-400 mt-8 text-center px-6 flex flex-col gap-1">
              <Image
                className="h-[80px] w-[80px] ml-20 pt-4"
                src={"/img.png"}
                height={50}
                width={50}
                alt="prince miyako"
              />
              <h2 className="font-semibold text-lg pt-2 text-center">
                Prince Miyako
              </h2>
              <h3 className="text-gray-500">Blogger/Photographer</h3>
              <div className="flex flex-row pt-1 justify-center">
                <RiStarSFill size={20} className="text-yellow-500" />
                <RiStarSFill size={20} className="text-yellow-500" />
                <RiStarSFill size={20} className="text-yellow-500" />
                <RiStarSFill size={20} className="text-yellow-500" />
                <RiStarSFill size={20} className="text-yellow-500" />
                <p className="text-gray-500 ml-2">(1 Review)</p>
              </div>
              <p className="text-gray-600 text-center pt-1 flex justify-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quod autem
              </p>
              <Image
                className="ml-9 pt-3"
                src={"/social_icon.png"}
                height={100}
                width={150}
                alt="social icons"
              />
            </div>
            {/* recent post */}
            <div className="h-[400px] w-[280px] border-2 border-solid border-gray-400 mt-4 px-6 flex flex-col gap-2">
              <h2 className="font-bold pt-4">Recent Post</h2>
              {/* img1 */}
              <div className="flex flex-row">
                <Image
                  className="h-[70px] w-[100px] rounded-sm"
                  src={"/unsplash_J9lD6FS6_cs.png"}
                  height={50}
                  width={50}
                  alt="burger"
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 pl-2">June 22, 2020</p>
                  <p className="pl-2">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <hr />
              {/* img2 */}
              <div className="flex flex-row">
                <Image
                  className="h-[70px] w-[100px] rounded-sm"
                  src={"/Mask Group (1).png"}
                  height={50}
                  width={50}
                  alt="burger"
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 pl-2">June 22, 2020</p>
                  <p className="pl-2">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <hr />
              {/* img3 */}
              <div className="flex flex-row">
                <Image
                  className="h-[70px] w-[100px] rounded-sm "
                  src={"/fork.png"}
                  height={50}
                  width={50}
                  alt="burger"
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 pl-2">June 22, 2020</p>
                  <p className="pl-2">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <hr className="mt-1" />
              {/* img 4 */}
              <div className="flex flex-row">
                <Image
                  className="h-[70px] w-[100px] rounded-sm "
                  src={"/italian pizza.png"}
                  height={50}
                  width={50}
                  alt="burger"
                />
                <div className="flex flex-col">
                  <p className="text-gray-400 pl-2">June 22, 2020</p>
                  <p className="pl-2">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <hr />
            </div>
            {/* filter by menu */}
            <div className="h-[400px] w-[280px] border-2 border-solid border-gray-400 mt-5 px-6 flex flex-col gap-2">
              <h2 className="font-bold pt-4">Filter By Menu</h2>
              {/* img1 */}
              <div className="flex flex-row">
                <Image
                  className="h-[50px] w-[50px] rounded-sm"
                  src={"/chicken fry.png"}
                  height={100}
                  width={100}
                  alt="chicke-fry"
                />
                <div className="flex flex-row justify-between gap-9">
                  <h2 className="font-medium pl-2 w-24 pt-2 ">Chicken Fry </h2>
                  <p className="pt-2">26</p>
                </div>
              </div>
              {/* img2 */}
              <div className="flex flex-row pt-2">
                <Image
                  className="h-[50px] w-[50px] rounded-sm"
                  src={"/c buurger.png"}
                  height={100}
                  width={100}
                  alt="chicke-fry"
                />
                <div className="flex flex-row justify-between gap-9">
                  <h2 className="font-medium pl-2 w-24 pt-2">Burger Food </h2>
                  <p className="pt-2">46</p>
                </div>
              </div>
              {/* img3 */}
              <div className="flex flex-row">
                <Image
                  className="h-[50px] w-[50px] rounded-sm"
                  src={"/c pizza.png"}
                  height={100}
                  width={100}
                  alt="chicke-fry"
                />
                <div className="flex flex-row justify-between gap-9">
                  <h2 className="font-medium pl-2 w-24 pt-3 ">Pizza </h2>
                  <p className="pt-2">16</p>
                </div>
              </div>
              {/* img4 */}
              <div className="flex flex-row">
                <Image
                  className="h-[50px] w-[50px] rounded-sm"
                  src={"/mushaom pizza.png"}
                  height={100}
                  width={100}
                  alt="chicke-fry"
                />
                <div className="flex flex-row justify-between gap-9">
                  <h2 className="font-medium pl-2 w-24 pt-3 ">Fresh Fruits </h2>
                  <p className="pt-2">36</p>
                </div>
              </div>
              {/* img5 */}
              <div className="flex flex-row">
                <Image
                  className="h-[50px] w-[50px] rounded-sm"
                  src={"/slice beef.png"}
                  height={100}
                  width={100}
                  alt="chicke-fry"
                />
                <div className="flex flex-row justify-between gap-9">
                  <h2 className="font-medium pl-2 w-24 pt-3 ">Vegetables </h2>
                  <p className="pt-2">16</p>
                </div>
              </div>
            </div>
            {/* popular tags */}
            <div className="h-[250px] w-[280px] border-2 border-solid border-gray-400 mt-6 px-6 flex flex-col gap-2">
              <h2 className="font-bold pt-4">Popular Tags</h2>
              {/* 1 row */}
              <div className="flex flex-row">
                <div className="h-8 p-1 w-24 border-2 border-solid border-gray-400 text-gray-800 text-center">
                  Sandwich
                </div>
                <div className="h-8 p-1 w-16 text-center border-2 border-solid border-gray-400 text-gray-800 pr-2 ml-3">
                  Tikka
                </div>
                <div className="h-8 p-1 w-16 text-center border-2 border-solid border-gray-400 text-gray-800 pr-2 ml-3">Bbq</div>
              </div>
              {/* 2 row */}
              <div className="flex flex-row">
                  <div className="h-8 p-1 w-[105px] border-2 border-solid border-gray-400 text-gray-800 text-center mt-2">Restaurant</div>
                  <div className="h-8 p-1 w-32 border-2 border-solid border-gray-400 text-gray-800 mt-2 ml-2">Chkn shwrma</div>
              </div>
              {/* 3 row */}
              < div className="flex flex-row">
                <div className="h-8 p-1 w-16 border-2 border-solid border-gray-400 text-gray-800 text-center mt-2">Health</div>
                <div className="h-8 p-1 w-[95px] border-2 border-solid border-gray-400 text-gray-800 text-center mt-2 ml-2">
                     Fast Food
                </div>
                <div className="h-8 p-1 w-[50px] border-2 border-solid border-gray-400 text-gray-800 text-center mt-2 ml-3">
                     Food
                </div>
              </div>
              {/* row4 */}
              <div className="flex flex-row">
                <div className="h-8 p-1 w-16 border-2 border-solid border-gray-400 text-gray-800 text-center mt-2">
               Pizza
                </div>
                <div className="h-8 p-1 w-16 border-2 border-solid border-gray-400 text-gray-800 text-center mt-2 ml-2">
               Burger
                </div>
                <div className="h-8 p-1 w-20 border-2 border-solid border-gray-400 text-gray-800 text-center mt-2 ml-3">
               Chicken
                </div>
              </div>
            </div>
            {/* photo GAllery */}
            <div className=" h-[200px] w-[280px] border-2 border-solid border-gray-400 mt-5 px-6">
                <Image className="pt-3" src={"/Photo.png"}  height={200} width={280} alt="group"/>
            </div>
            {/* icons */}
            <div className="h-[100px] w-[280px] border-2 border-solid border-gray-400 mt-5 px-6 ">
              <h2 className="font-bold pt-4 ml-4">Follow Us</h2>
              <div className="flex flex-row pt-2 ml-4">
                <div className="h-8 w-10 border-2 border-solid border-gray-400 p-2 bg-gray-400"><FaTwitter /></div>
                <div className="h-8 w-10 border-2 border-solid border-gray-400 p-2 bg-orange-700"><FaYoutube/></div>
                <div className="h-8 w-10 border-2 border-solid border-gray-400 p-2 bg-gray-400"><FaInstagram/></div>
                <div className="h-8 w-10 border-2 border-solid border-gray-400 p-2 bg-gray-400"><FaFacebook/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloglist;

