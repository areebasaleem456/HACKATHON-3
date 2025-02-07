import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";

const Shoplist = () => {
  return (
    <div className=" bg-white">
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
                Home{" "}
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
      <div className="flex flex-row bg-white py-14">
        <div className="flex flex-row gap-4">
          <h2 className="text-black">Sort By:</h2>
          <input
            className="text-gray-800 border-2 border-solid border-gray-600"
            type="text"
            placeholder="Newest"
          />
        </div>
        <div className="flex flex-row gap-4">
          <h2 className="text-black ml-6">Show:</h2>
          <input
            className="text-gray-800 border-2 border-solid border-gray-600"
            type="text"
            placeholder="Default"
          />
        </div>
      </div>
      {/* menu list and buttons */}
      <div className="flex flex-row">
        <div className="flex flex-col bg-white ml-10">
          <div className="flex flex-row gap-8 mb-5">
            <div>
              <Image
                src={"/Mask Group.png"}
                height={300}
                width={300}
                alt="product1"
              />
              <h2 className="font-semibold pt-2 text-black">Fresh Lime</h2>
              <div className="flex flex-row gap-3 pt-3">
                <span className="text-orange-700">$38.00 </span>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
            <div>
              <Image
                src={"/Mask Group (1).png"}
                height={300}
                width={300}
                alt="product2"
              />
              <h2 className="font-semibold pt-2 text-black">
                Chocolate Muffin
              </h2>
              <p className="text-orange-700 pt-3 ">$28.00 </p>
            </div>
            <div>
              <Image
                src={"/Mask Group (2).png"}
                height={300}
                width={300}
                alt="product2"
              />
              <h2 className="font-semibold pt-2 text-black">Burger</h2>
              <div className="flex flex-row gap-3 pt-3">
                <span className="text-orange-700">$21.00 </span>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-5">
            <div>
              <Image
                src={"/Mask Group (6).png"}
                height={300}
                width={300}
                alt="product4"
              />
              <h2 className="font-semibold pt-2 text-black">Country Burger</h2>

              <p className="text-orange-700 pt-3">$45.00 </p>
            </div>
            <div>
              <Image
                src={"/Mask Group (3).png"}
                height={300}
                width={300}
                alt="product5"
              />
              <h2 className="font-semibold pt-2 text-black">Drink</h2>

              <div className="flex flex-row gap-3 pt-3">
                <span className="text-orange-700">$23.00 </span>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
            <div>
              <Image
                src={"/Mask Group (4).png"}
                height={300}
                width={300}
                alt="product6"
              />
              <h2 className="font-semibold pt-2 text-black">Pizza</h2>
              <p className="text-orange-700 pt-3 ">$43.00 </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-5">
            <div>
              <Image
                src={"/Mask Group (5).png"}
                height={300}
                width={300}
                alt="product7"
              />
              <h2 className="font-semibold pt-2 text-black">Cheese Butter</h2>

              <p className="text-orange-700 pt-3">$45.00 </p>
            </div>
            <div>
              <Image
                src={"/sandwich.png"}
                height={300}
                width={300}
                alt="product7"
              />
              <h2 className="font-semibold pt-2 text-black">Sandwichh</h2>

              <p className="text-orange-700">$25.00 </p>
            </div>
            <div>
              <Image
                src={"/Mask Group (9).png"}
                height={300}
                width={300}
                alt="product9"
              />
              <h2 className="font-semibold pt-2 text-black">Chicken Chup</h2>
              <p className="text-orange-700 pt-3 ">$12.00 </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-5">
            <div>
              <Image
                src={"/Mask Group (6).png"}
                height={300}
                width={300}
                alt="product4"
              />
              <h2 className="font-semibold pt-2 text-black">Country Burger</h2>

              <p className="text-orange-700 pt-3">$45.00 </p>
            </div>
            <div>
              <Image
                src={"/Mask Group (3).png"}
                height={300}
                width={300}
                alt="product5"
              />
              <h2 className="font-semibold pt-2 text-black">Drink</h2>

              <div className="flex flex-row gap-3 pt-3">
                <span className="text-orange-700">$23.00 </span>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
            <div>
              <Image
                src={"/Mask Group (4).png"}
                height={300}
                width={300}
                alt="product6"
              />
              <h2 className="font-semibold pt-2 text-black">Pizza</h2>
              <p className="text-orange-700 pt-3 ">$43.00 </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-5">
            <div>
              <Image
                src={"/Mask Group (5).png"}
                height={300}
                width={300}
                alt="product7"
              />
              <h2 className="font-semibold pt-2 text-black">Cheese Butter</h2>

              <p className="text-orange-700 pt-3">$45.00 </p>
            </div>
            <div>
              <Image
                src={"/sandwich.png"}
                height={300}
                width={300}
                alt="product7"
              />
              <h2 className="font-semibold pt-2 text-black">Sandwichh</h2>

              <p className="text-orange-700">$25.00 </p>
            </div>
            <div>
              <Image
                src={"/Mask Group (9).png"}
                height={300}
                width={300}
                alt="product9"
              />
              <h2 className="font-semibold pt-2 text-black">Chicken Chup</h2>
              <p className="text-orange-700 pt-3 ">$12.00 </p>
            </div>
          </div>
          <div className="flex flex-row gap-3 ml-[380px] ">
            <div className="h-11 w-11 border-4 border-orange-700 border-solid">
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
            <div className="h-11 w-11 border-4 border-orange-700 border-solid  font-semibold text-2xl pt-1 pl-3 bg-orange-700 text-white">
              2
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid text-orange-700 font-semibold text-2xl pt-1 pl-3">
              3
            </div>
            <div className="h-11 w-11 border-4 border-orange-700 border-solid">
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
        {/* side bar */}
        <div className="ml-10">
          {/* search product */}
          <div className="flex flex-row">
            <div>
              <input
                className="border-2 border-gray-500 border-solid py-2 pl-4 bg-orange-100"
                type="text"
                placeholder="Search Products"
              />
            </div>
            <div className="h-[42px] w-11 bg-orange-700 border-2 border-orange-700 border-solid ">
              <Image
                className="pt-2 pl-2"
                src={"/MagnifyingGlass.png"}
                height={30}
                width={30}
                alt="search icon"
              />
            </div>
          </div>
          {/* category */}
          <div className="text-black">
            <h2 className="text-black font-semibold text-lg mt-4">Category</h2>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Sandwiches</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Burger</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Chicken Chup</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Drink</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Pizza</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Thi</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Non-Veg</h2>
            </div>
            <div className="flex flex-row gap-3 mt-2">
              <div className="h-4 w-4 border-2 border-black border-solid mt-2"></div>
              <h2 className="font-normal mt-1  ">Uncategorized</h2>
            </div>
            <Image className="mt-6" src={"/Banner.png"} height={300} width={300} alt="banner" />
            <h2 className="font-semibold text-lg mt-3">Filter By Price</h2>
            <div className="flex flex-row gap-1 mt-4">
                <div className="h-2 w-2 bg-orange-700"></div>
                <div className="h-2 w-72 bg-orange-700"></div>
                <div className="h-2 w-2 bg-orange-700"></div>
            </div>
            <div className="flex flex-row mt-3">
                
                    <p className="font-normal">From $0 to $8000</p>
                    <p className="ml-32 font-normal">Filter</p>
                
            </div>
          </div>
          {/* Latest products and items*/}
          <div className="text-black">
            <h2 className="font-semibold text-lg mt-4">Latest Products</h2>
            <div className="mt-4 flex flex-row">
                <div>
                <Image className="h-[80px] w-[80px]" src={"/product-20.png"} height={90} width={70} alt="latest product"/>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-normal text-lg ml-3">Pizza</h2>
                  <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700"/>
                  <RiStarSFill size={20}  className="text-orange-700"/>
                  <RiStarSFill size={20} className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  </div>
                   <p className="ml-3 text-gray-800 pt-2">$35.00</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <div>
                <Image className="h-[80px] w-[80px]" src={"/product-20.png"} height={90} width={70} alt="latest product"/>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-normal text-lg ml-3">Cupchake</h2>
                  <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700"/>
                  <RiStarSFill size={20}  className="text-orange-700"/>
                  <RiStarSFill size={20} className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  </div>
                   <p className="ml-3 text-gray-800 pt-2">$35.00</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <div>
                <Image className="h-[80px] w-[80px]" src={"/product-20.png"} height={90} width={70} alt="latest product"/>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-normal text-lg ml-3">Cookies</h2>
                  <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700"/>
                  <RiStarSFill size={20}  className="text-orange-700"/>
                  <RiStarSFill size={20} className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  </div>
                   <p className="ml-3 text-gray-800 pt-2">$35.00</p>
                </div>
            </div>
            <div className="mt-4 flex flex-row">
                <div>
                <Image className="h-[80px] w-[80px]" src={"/product-20.png"} height={90} width={70} alt="latest product"/>
                </div>
                <div className="flex flex-col">
                  <h2 className="font-normal text-lg ml-3">Burger</h2>
                  <div className="flex flex-row ml-3 pt-1">
                  <RiStarSFill size={20} className="text-orange-700"/>
                  <RiStarSFill size={20}  className="text-orange-700"/>
                  <RiStarSFill size={20} className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  <RiStarSFill size={20}  className="text-gray-500"/>
                  </div>
                   <p className="ml-3 text-gray-800 pt-2">$35.00</p>
                </div>
            </div>
          </div>
          {/* Products Tags */}
          <h2 className="font-bold text-2xl mt-8 text-black">Products Tags</h2>
          <div className="flex flex-row text-gray-700 underline underline-[gray-700] mt-4 font-medium text-lg">
            <div className="flex flex-col">
            <div >Services</div>
            <div className="pt-4">Cupcakes</div>
            <div className="pt-4">Our Shops</div>
            </div>
            <div className="flex flex-col ml-4">
            <div >Our Menu</div>
            <div className="pt-4 text-orange-700 underline underline-[orange-700]">Burger</div>
            <div className="pt-4">Tandoori Chicken</div>
            </div>
            <div className="flex flex-col">
            <div >Pizza</div>
            <div className="pt-4">Cookies</div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoplist;
