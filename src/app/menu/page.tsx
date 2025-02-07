import React from "react";
import Image from "next/image";
import Topfooter from "../components/topfooter";

const Menu = () => {
  return (
    <div className="bg-white">
      {/* header image */}
      <div>
        {/* First Section: Image and Breadcrumb */}
        <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          {/* Banner Image */}
          <Image
            src={"/cheekout.png"}
            alt="Banner Image"
            width={700}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Content Section */}
          <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              Our Menu
            </h2>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2 text-black text-sm md:text-base">
              <a href="/" className="text-white">
                Home
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
      <div className="flex flex-col md:flex-row ml-4 md:ml-20 text-black mt-20">
        {/* Image Section */}
        <Image
          className="h-[300px] w-[300px] md:h-[550px] md:w-[350px] mx-auto md:mx-0"
          src={"/Rectangle 8874.png"}
          height={400}
          width={350}
          alt="image"
        />

        {/* Text Section */}
        <div className="mt-6 md:mt-0 md:ml-20 flex flex-col md:flex-row w-full">
          <div className="flex flex-col items-center md:items-start">
            <Image src={"/Coffee.png"} height={30} width={30} alt="coffee" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-center md:text-left">
              Starter Menu
            </h1>

            {/* Menu Item 1 */}
            <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
              <div className="flex flex-col md:w-3/4">
                <h2 className="text-lg font-bold">
                  Alder Grilled Chinook Salmon
                </h2>
                <h3 className="text-gray-800 mt-2">
                  Toasted French Bread topped with romano, cheddar
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
                32$
              </p>
            </div>
            <hr className="mt-3" />
            {/* Menu Item 2 */}
            <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
              <div className="flex flex-col md:w-3/4">
                <h2 className="text-lg font-bold text-orange-700">
                  Berries and Creme Tart
                </h2>
                <h3 className="text-gray-800 mt-2">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </h3>
                <p className="mt-2 text-gray-700">700 CAL</p>
              </div>
              <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
                43$
              </p>
            </div>
            <hr className="mt-3" />

            {/* Menu Item 3 */}
            <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
              <div className="flex flex-col md:w-3/4">
                <h2 className="text-lg font-bold">
                  Tormentoso Bush Pizza Pintoage
                </h2>
                <h3 className="text-gray-800 mt-2">
                  Ground cumin, avocado, peeled and cubed
                </h3>
                <p className="mt-2 text-gray-700">1060 CAL</p>
              </div>
              <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
                14$
              </p>
            </div>
            <hr className="mt-3" />

            {/* Menu Item 4 */}
            <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
              <div className="flex flex-col md:w-3/4">
                <h2 className="text-lg font-bold">Spicy Vegan Potato Curry</h2>
                <h3 className="text-gray-800 mt-2">
                  Spreadable cream cheese, crumbled blue cheese
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
                35$
              </p>
            </div>
            <hr className="mt-3" />
          </div>
        </div>
      </div>

      {/* part2 */}
      <div className="flex flex-col md:flex-row m-4 md:m-20 pb-14 bg-white">
        {/* Left Content (Text Section) */}
        <div className="text-black md:ml-20 flex-1">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffee" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-center md:text-left">
            Main Course
          </h1>

          {/* Menu Item 1 */}
          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="flex flex-col md:w-3/4">
              <h2 className="text-lg font-bold">
                Optic Big Breakfast Combo Menu
              </h2>
              <h3 className="text-gray-800 mt-2">
                Toasted French Bread topped with romano, cheddar
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
              32$
            </p>
          </div>
          <hr className="mt-3" />

          {/* Menu Item 2 */}
          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="flex flex-col md:w-3/4">
              <h2 className="text-lg font-bold">
                Cashew Chicken With Stir-Fry
              </h2>
              <h3 className="text-gray-800 mt-2">
                Gorgonzola, ricotta, mozzarella, taleggio
              </h3>
              <p className="mt-2 text-gray-700">700 CAL</p>
            </div>
            <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
              43$
            </p>
          </div>
          <hr className="mt-3" />

          {/* Menu Item 3 */}
          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="flex flex-col md:w-3/4">
              <h2 className="text-lg font-bold">Vegetable & Green Salad</h2>
              <h3 className="text-gray-800 mt-2">
                Ground cumin, avocado, peeled and cubed
              </h3>
              <p className="mt-2 text-gray-700">1060 CAL</p>
            </div>
            <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
              14$
            </p>
          </div>
          <hr className="mt-3" />

          {/* Menu Item 4 */}
          <div className="flex flex-col md:flex-row justify-between mt-5 w-full">
            <div className="flex flex-col md:w-3/4">
              <h2 className="text-lg font-bold">Spicy Vegan Potato Curry</h2>
              <h3 className="text-gray-800 mt-2">
                Spreadable cream cheese, crumbled blue cheese
              </h3>
              <p className="mt-2 text-gray-700">560 CAL</p>
            </div>
            <p className="text-orange-700 text-xl font-semibold mt-3 md:mt-0 md:ml-16">
              35$
            </p>
          </div>
          <hr className="mt-3" />
        </div>

        {/* Right Content (Image Section) */}
        <div className="mt-6 md:mt-0 md:ml-20 flex justify-center md:flex-none">
          <Image
            className="h-[300px] w-[300px] md:h-[450px] md:w-[400px]"
            src={"/Mask Group (2).png"}
            height={400}
            width={350}
            alt="image"
          />
        </div>
      </div>

      {/* image */}
      <Image
        className="h-auto w-full max-w-full object-fill md:h-[350px] sm:h-[300px]"
        src={"/Clients.png"}
        height={550}
        width={550}
        alt="clients"
      />

      {/* part3 */}
      <div className="flex flex-col lg:flex-row pb-14 mt-20">
        <div className="flex justify-center lg:ml-20 text-black mb-6 lg:mb-0">
          <Image
            className="w-full h-auto max-w-xs lg:w-[350px] lg:h-[550px] object-cover"
            src={"/cupcake.png"}
            height={400}
            width={350}
            alt="image"
          />
        </div>

        <div className="lg:ml-20">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffee" />
          <h1 className="text-3xl font-extrabold mt-3 text-black">Dessert</h1>

          {/* Dessert Items */}
          <div className="space-y-6 mt-5">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5 text-black">
                  Fig And Lemon Cake
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Toasted French Bread topped with romano, cheddar
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-56 text-xl font-semibold">
                32$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5 text-orange-700">
                  Creamy Mascarpone Cake
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Gorgonzola, ricolya, mozzarella, taleggio
                </h3>
                <p className="mt-2 text-gray-700">700 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-80 text-xl font-semibold">
                43$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5 text-black">
                  Pastry, Blueberries, Lemon Juice
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Ground cumin, avocado, peeled and cubed
                </h3>
                <p className="mt-2 text-gray-700">1060 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-72 text-xl font-semibold">
                14$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5 text-black">
                  Pain au Chocolat
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Spreadable cream cheese, crumbled blue cheese
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-60 text-xl font-semibold">
                35$
              </p>
              <hr className="mt-3" />
            </div>
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div className="flex flex-col lg:flex-row m-6 lg:m-20 pb-14 bg-white">
        <div className="text-black mb-6 lg:mb-0 lg:ml-20">
          <Image src={"/Coffee.png"} height={30} width={30} alt="coffee" />
          <h1 className="text-3xl font-extrabold mt-3">Drinks</h1>

          {/* Drink Items */}
          <div className="space-y-6 mt-5">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5">Coffee Machiato</h2>
                <h3 className="text-gray-800 mt-3">
                  Toasted French Bread topped with romano, cheddar
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-56 text-xl font-semibold">
                32$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5">
                  Aperol Spiritz Capacianno
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Gorgonzola, ricolya, mozzarella, taleggio
                </h3>
                <p className="mt-2 text-gray-700">700 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-80 text-xl font-semibold">
                43$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5">Caffe Latte Campuri</h2>
                <h3 className="text-gray-800 mt-3">
                  Ground cumin, avocado, peeled and cubed
                </h3>
                <p className="mt-2 text-gray-700">1060 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-72 text-xl font-semibold">
                14$
              </p>
              <hr className="mt-3" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h2 className="text-lg font-bold mt-5">
                  Tormentoso Bush Tea Pintoage
                </h2>
                <h3 className="text-gray-800 mt-3">
                  Spreadable cream cheese, crumbled blue cheese
                </h3>
                <p className="mt-2 text-gray-700">560 CAL</p>
              </div>
              <p className="text-orange-700 mt-8 lg:ml-60 text-xl font-semibold">
                35$
              </p>
              <hr className="mt-3" />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:ml-20">
          <Image
            className="w-full lg:h-[450px] lg:w-[400px] mt-6 lg:mt-20 object-cover"
            src={"/Mask Group (3).png"}
            height={400}
            width={350}
            alt="image"
          />
        </div>
      </div>

      <Topfooter />
    </div>
  );
};

export default Menu;
