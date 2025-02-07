import React from "react";
import Image from "next/image";
import Topfooter from "./topfooter";

const Menu = () => {
  return (
    <div className="bg-white">
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
              Our Menu
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Menu
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* part1 */}
      <div className="flex flex-row ml-40 text-black mt-20">
        <Image
          className="h-[550px] w-[350px]"
          src={"/Rectangle 8874.png"}
          height={400}
          width={350}
          alt="image"
        />
        <div className="ml-20">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffe" />
          <h1 className="text-3xl font-extrabold mt-3">Starter Menu</h1>

          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Alder Grilled Chinook Salmon
              </h2>
              <h3 className="text-gray-800 mt-3">
                Toasted French Bread topped with romano, cheddar
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-56 text-xl font-semibold">
              32$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5 text-orange-700">
                Berries and creme tart
              </h2>
              <h3 className="text-gray-800 mt-3">
                Gorgonzola, ricolya, mozzarella,taleggio
              </h3>
              <p className="mt-2 text-gray-700">700 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-80 text-xl font-semibold">
              43$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Tormentoso Bush Pizza Pintoage
              </h2>

              <h3 className="text-gray-800 mt-3">
                Ground cumin, avocado, peeled and cubed
              </h3>
              <p className="mt-2 text-gray-700">1060 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-72 text-xl font-semibold">
              14$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Spicy Vegan Potato Curry
              </h2>
              <h3 className="text-gray-800 mt-3">
                Spreadable cream cheese , crumbled blue cheese
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-60 text-xl font-semibold">
              35$
            </p>
            <hr className="mt-3" />
          </div>
        </div>
      </div>
      {/* part2 */}
      <div className="flex flex-row m-20 pb-14 bg-white">
        <div className="ml-20 text-black ">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffe" />
          <h1 className="text-3xl font-extrabold mt-3 ">Main Course</h1>

          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Optic Big Breakfast Combo Menu
              </h2>
              <h3 className="text-gray-800 mt-3">
                Toasted French Bread topped with romano, cheddar
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-56 text-xl font-semibold">
              32$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Cashew Chicke With Stir-Fry
              </h2>
              <h3 className="text-gray-800 mt-3">
                Gorgonzola, ricolya, mozzarella,taleggio
              </h3>
              <p className="mt-2 text-gray-700">700 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-80 text-xl font-semibold">
              43$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Vegetable & Green Salad
              </h2>

              <h3 className="text-gray-800 mt-3">
                Ground cumin, avocado, peeled and cubed
              </h3>
              <p className="mt-2 text-gray-700">1060 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-72 text-xl font-semibold">
              14$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Spicy Vegan Potato Curry
              </h2>
              <h3 className="text-gray-800 mt-3">
                Spreadable cream cheese , crumbled blue cheese
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-60 text-xl font-semibold">
              35$
            </p>
            <hr className="mt-3" />
          </div>
        </div>
        <Image
          className="h-[450px] w-[400px] ml-20 mt-20"
          src={"/Mask Group (2).png"}
          height={400}
          width={350}
          alt="image"
        />
      </div>
      {/* image */}
      <Image className="h-[350px] w-full" src={"/Clients.png"} height={500} width={1000} alt="clients"/>
       {/* part3 */}
      <div className="flex flex-row pb-14">
      <div className="flex flex-row ml-40 text-black mt-20">
        <Image
          className="h-[550px] w-[350px]"
          src={"/cupcake.png"}
          height={400}
          width={350}
          alt="image"
        />
        <div className="ml-20">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffe" />
          <h1 className="text-3xl font-extrabold mt-3">Dessert</h1>

          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Fig And Lemon Cake
              </h2>
              <h3 className="text-gray-800 mt-3">
                Toasted French Bread topped with romano, cheddar
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-56 text-xl font-semibold">
              32$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Creamy mascarpone cake
              </h2>
              <h3 className="text-gray-800 mt-3">
                Gorgonzola, ricolya, mozzarella,taleggio
              </h3>
              <p className="mt-2 text-gray-700">700 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-80 text-xl font-semibold">
              43$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Pastry, blueberries, lemon juice
              </h2>

              <h3 className="text-gray-800 mt-3">
                Ground cumin, avocado, peeled and cubed
              </h3>
              <p className="mt-2 text-gray-700">1060 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-72 text-xl font-semibold">
              14$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Pain au chocolat
              </h2>
              <h3 className="text-gray-800 mt-3">
                Spreadable cream cheese , crumbled blue cheese
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-60 text-xl font-semibold">
              35$
            </p>
            <hr className="mt-3" />
          </div>
        </div>
      </div>
      </div>
      {/* part 4 */}
      <div className="flex flex-row m-20 pb-14 bg-white">
        <div className="ml-20 text-black ">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffe" />
          <h1 className="text-3xl font-extrabold mt-3 ">Drinks</h1>

          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Coffee machiato
              </h2>
              <h3 className="text-gray-800 mt-3">
                Toasted French Bread topped with romano, cheddar
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-56 text-xl font-semibold">
              32$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Aperol Spiritz Capacianno
              </h2>
              <h3 className="text-gray-800 mt-3">
                Gorgonzola, ricolya, mozzarella,taleggio
              </h3>
              <p className="mt-2 text-gray-700">700 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-80 text-xl font-semibold">
              43$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Caffe Latte Campuri
              </h2>

              <h3 className="text-gray-800 mt-3">
                Ground cumin, avocado, peeled and cubed
              </h3>
              <p className="mt-2 text-gray-700">1060 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-72 text-xl font-semibold">
              14$
            </p>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold mt-5">
                Tormentoso Bush Tea Pintoage
              </h2>
              <h3 className="text-gray-800 mt-3">
                Spreadable cream cheese , crumbled blue cheese
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 mt-8 ml-60 text-xl font-semibold">
              35$
            </p>
            <hr className="mt-3" />
          </div>
        </div>
        <Image
          className="h-[450px] w-[400px] ml-20 mt-20"
          src={"/Mask Group (3).png"}
          height={400}
          width={350}
          alt="image"
        />
      </div>
      <Topfooter  />
    </div>
  );
};

export default Menu;
