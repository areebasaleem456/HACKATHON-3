"use client";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import React from "react";

import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

function Homepage() {
  let router = useRouter();
  return (
    <div className="flex flex-col  ">
      <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center ">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%] px-4 sm:px-6 lg:px-12">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal text-orange-700 whitespace-nowrap text-center md:text-left">
            Its Quick & Amusing!
          </h1>

          <h1 className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
            <span className="text-orange-700">Th</span>e Art of Speed Food
            Quality
          </h1>

          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-normal mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
            <Button
              onClick={() => router.push("/shoplist")}
              className="bg-orange-700 text-white w-[100px] h-[30px] sm:w-[130px] sm:h-[40px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800"
            >
              See More
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
          <Image
            src={"/hero.jpeg"}
            height={300}
            width={500}
            alt="Hero Image"
            className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
          />
        </div>
      </section>
      {/* about */}
      <div className="flex flex-col md:flex-row justify-between items-center p-3">
        <div className="w-full md:w-[700px] text-center md:text-left lg:ml-[50px]">
          <h2 className="text-3xl font-bold text-orange-700">About Us</h2>
          <p className="text-orange-700 text-3xl font-bold mt-3 gap-3">
            We <span className="text-white font-semibold">Create The Best</span>{" "}
            <br />
            <span className="text-white font-semibold leading-7">
              Foody Product
            </span>
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse enim
            magni adipisci dicta voluptate, corporis velit tempore quos, ea
            eveniet nam consectetur et sed molestiae inventore natus excepturi
            sit quidem!
          </p>

          <div className="flex flex-col mt-6">
            <div className="flex items-center space-x-2">
              <TiTick />
              <p>
                lacus nisi et ac similique excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <p>
                Quisquie diam pallenteque excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <TiTick />
              <p>Lorem ispum dilor excepturi quaerat qui incidunt amet.</p>
            </div>

            <Button
              onClick={() => router.push("/about")}
              className="bg-orange-700 text-white w-[160px] h-[50px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 mt-6 mx-auto md:mx-0"
            >
              Read More
            </Button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 text-center md:text-left lg:mr-[100px]">
          <div className="mb-4">
            <Image
              src="/egg.png"
              height={500}
              width={600}
              alt="egg picture"
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start  md:space-x-4">
            <div className="w-full md:w-[300px] h-[400px]">
              <Image
                src="/sauce.png"
                height={400}
                width={300}
                alt="sauce picture"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-[300px] h-[400px] ">
              <Image
                src="/toast.png"
                height={500}
                width={300}
                alt="toast picture"
                className="mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* food category */}
      <div>
        <h2 className="text-orange-700 font-serif font-semibold text-center">
          Food Category
        </h2>
        <p className="text-orange-700 text-center text-2xl py-4">
          Ch{" "}
          <span className="text-white text-center font-extrabold text-2xl">
            oose Food Items
          </span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          <div className="w-full p-2">
            <Image
              src={"/item1.png"}
              height={400}
              width={400}
              alt="item1"
            ></Image>
          </div>
          <div className="w-full p-2">
            <Image
              src={"/item2.png"}
              height={400}
              width={400}
              alt="item2"
            ></Image>
          </div>
          <div className="w-full p-2">
            <Image
              src={"/item3.png"}
              height={400}
              width={400}
              alt="item3"
            ></Image>
          </div>
          <div className="w-full p-2">
            <Image
              src={"/item4.png"}
              height={400}
              width={400}
              alt="item4"
            ></Image>
          </div>
        </div>
      </div>
      {/* picture */}
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* Left Section (Images) */}
          <div className="pt-36 px-4 lg:px-0 lg:ml-[120px]">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <Image
                  src={"/lemon.png"}
                  height={400}
                  width={200}
                  alt="lemon picture"
                  className="w-full object-cover"
                />
              </div>

              <div className="flex justify-center lg:justify-start">
                <Image
                  className="pt-24 py-3 lg:ml-2 w-full object-cover"
                  src={"/item2.png"}
                  height={200}
                  width={200}
                  alt="item2"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row mb-4">
                <div className="pt-2">
                  <Image
                    src={"/yogurt.png"}
                    height={600}
                    width={100}
                    alt="yogurt picture"
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex justify-center lg:ml-3">
                  <Image
                    className="py-3 w-full object-cover"
                    src={"/Mask Group (2).png"}
                    height={150}
                    width={150}
                    alt="mask group"
                  />
                </div>
              </div>

              <div className="ml-0 lg:ml-2">
                <div className="flex flex-col">
                  <Image
                    src={"/fries.png"}
                    height={100}
                    width={108}
                    alt="fries"
                    className="w-full object-cover"
                  />
                </div>

                <div>
                  <Image
                    className="pt-3 w-full object-cover"
                    src={"/pasta2.png"}
                    height={100}
                    width={108}
                    alt="pasta"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Text and Icons) */}
          <div className="ml-0 lg:ml-48 mt-12 lg:mt-36 px-4 py-8">
            <h2 className="text-2xl font-semibold text-orange-700 text-center lg:text-left">
              Why Choose Us
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mt-2 text-center lg:text-left">
              Ex
              <p className="text-white block">
                ta Ordinary Taste <br /> And Experience
              </p>
            </h1>

            <p className="w-44 md:w-96 text-white mt-8 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nobis unde neque sit minus perferendis at commodi animi mollitia
              placeat. Voluptatem asperiores quae tempore quaerat esse sapiente
              amet ipsa laboriosam.
            </p>

            <div className="flex flex-row flex-wrap gap-7 mt-6 justify-center lg:justify-start">
              <div className="mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
                <IoFastFoodOutline size={40} />
              </div>
              <div className="mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
                <MdLunchDining size={40} />
              </div>
              <div className="h-16 w-16 bg-orange-700 flex items-center justify-center">
                <MdOutlineDinnerDining size={40} />
              </div>
            </div>

            <div className="flex flex-row flex-wrap mt-6 items-center justify-center lg:justify-start">
              <div className="h-16 w-2 bg-orange-700"></div>
              <div className="h-16 w-20 bg-white text-orange-700 text-center flex items-center justify-center font-extrabold text-3xl p-4">
                30+
              </div>
              <div className="h-16 w-40 text-black font-semibold bg-white text-center flex items-center justify-center">
                Years Of <br /> Experience
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client picture */}
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* Left Section (Images) */}
          <div className="pt-36 px-4 lg:px-0 lg:ml-[120px]">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-4 lg:mb-0">
                <Image
                  src={"/lemon.png"}
                  height={400}
                  width={200}
                  alt="lemon picture"
                  className="w-full object-cover"
                />
              </div>

              <div className="flex justify-center lg:justify-start">
                <Image
                  className="pt-24 py-3 lg:ml-2 w-full object-cover"
                  src={"/item2.png"}
                  height={200}
                  width={200}
                  alt="item2"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row mb-4">
                <div className="pt-2">
                  <Image
                    src={"/yogurt.png"}
                    height={600}
                    width={100}
                    alt="yogurt picture"
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex justify-center lg:ml-3">
                  <Image
                    className="py-3 w-full object-cover"
                    src={"/Mask Group (2).png"}
                    height={150}
                    width={150}
                    alt="mask group"
                  />
                </div>
              </div>

              <div className="ml-0 lg:ml-2">
                <div className="flex flex-col">
                  <Image
                    src={"/fries.png"}
                    height={100}
                    width={108}
                    alt="fries"
                    className="w-full object-cover"
                  />
                </div>

                <div>
                  <Image
                    className="pt-3 w-full object-cover "
                    src={"/pasta2.png"}
                    height={100}
                    width={108}
                    alt="pasta"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Text and Icons) */}
          <div className="ml-0 lg:ml-48 mt-12 lg:mt-36 px-4 py-8">
            <h2 className="text-2xl font-semibold text-orange-700 text-center lg:text-left">
              Why Choose Us
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mt-2 text-center lg:text-left">
              Ex
              <p className="text-white block">
                ta Ordinary Taste <br /> And Experience
              </p>
            </h1>

            <p className="w-44 md:w-96 text-white mt-8 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nobis unde neque sit minus perferendis at commodi animi mollitia
              placeat. Voluptatem asperiores quae tempore quaerat esse sapiente
              amet ipsa laboriosam.
            </p>

            <div className="flex flex-row flex-wrap gap-7 mt-6 justify-center lg:justify-start">
              <div className="mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
                <IoFastFoodOutline size={40} />
              </div>
              <div className="mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
                <MdLunchDining size={40} />
              </div>
              <div className="h-16 w-16 bg-orange-700 flex items-center justify-center">
                <MdOutlineDinnerDining size={40} />
              </div>
            </div>

            <div className="flex flex-row flex-wrap mt-6 items-center justify-center lg:justify-start">
              <div className="h-16 w-2 bg-orange-700"></div>
              <div className="h-16 w-20 bg-white text-orange-700 text-center flex items-center justify-center font-extrabold text-3xl p-4">
                30+
              </div>
              <div className="h-16 w-40 text-black font-semibold bg-white text-center flex items-center justify-center">
                Years Of <br /> Experience
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* choose and pick */}
      <div className="mb-20">
        <div className="mt-16">
          <h3 className="text-orange-700 font-semibold text-center">
            Choose & Pick
          </h3>
          <h3 className="text-center text-orange-700 font-extrabold text-2xl mt-6">
            Fr <span className="text-white ">om Our Menu</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 pl-5">
          <h3 className="text-orange-700 text-lg sm:text-xl">Breakfast</h3>
          <h3 className="text-lg sm:text-xl">Lunch</h3>
          <h3 className="text-lg sm:text-xl">Dinner</h3>
          <h3 className="text-lg sm:text-xl">Desert</h3>
          <h3 className="text-lg sm:text-xl">Drink</h3>
          <h3 className="text-lg sm:text-xl">Snacks</h3>
          <h3 className="text-lg sm:text-xl">Soups</h3>
        </div>

        <div className="flex flex-wrap justify-center mt-10 gap-6">
          <div className="flex flex-col items-center">
            <Image src={"/salad.png"} height={350} width={350} alt="salad" />
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            {[
              {
                imgSrc: "/lettuce leaf.png",
                title: "Lettuce Leaf",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
              {
                imgSrc: "/Mask Group (2).png",
                title: "Fresh Breakfast",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$14.5",
              },
              {
                imgSrc: "/mild butter.png",
                title: "Mild Butter",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
              {
                imgSrc: "/fresh bread.png",
                title: "Fresh Bread",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
            ].map(({ imgSrc, title, description, price }, index) => (
              <div key={index} className="flex flex-row mt-4">
                <Image
                  className="rounded-xl"
                  src={imgSrc}
                  height={50}
                  width={50}
                  alt={title}
                />
                <div className="flex flex-col ml-2">
                  <h3 className="font-semibold">{title}</h3>
                  <h4 className="font-light">{description}</h4>
                  <p className="text-orange-700">{price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            {[
              {
                imgSrc: "/glow cheese.png",
                title: "Glow Cheese",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
              {
                imgSrc: "/italian pizza.png",
                title: "Italian Pizza",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$14.5",
              },
              {
                imgSrc: "/slice beef.png",
                title: "Slice Beef",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
              {
                imgSrc: "/mushaom pizza.png",
                title: "Mushaom Pizza",
                description: "lacus nisi, et ac dapibus walet in consiquet",
                price: "$12.5",
              },
            ].map(({ imgSrc, title, description, price }, index) => (
              <div key={index} className="flex flex-row mt-4">
                <Image
                  className="rounded-xl"
                  src={imgSrc}
                  height={70}
                  width={70}
                  alt={title}
                />
                <div className="flex flex-col ml-2">
                  <h3 className="font-semibold">{title}</h3>
                  <h4 className="font-light">{description}</h4>
                  <p className="text-orange-700">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* chefs */}
      <div className="mt-12 mb-12">
        <h3 className="text-orange-700 text-center font-semibold text-xl">
          Chefs
        </h3>
        <h2 className="text-orange-700 font-extrabold text-2xl text-center mt-4">
          Me <span className="text-white">et Our Chefs</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="w-1/2 sm:w-1/4">
            <Image
              src={"/d.estwood.png"}
              height={300}
              width={300}
              alt="chef d.estwood"
            />
          </div>
          <div className="w-1/2 sm:w-1/4">
            <Image
              src={"/d.scroiesh.png"}
              height={300}
              width={300}
              alt="chef d.scroshie"
            />
          </div>
          <div className="w-1/2 sm:w-1/4">
            <Image
              src={"/Chef Card 1.png"}
              height={300}
              width={300}
              alt="m.william"
            />
          </div>
          <div className="w-1/2 sm:w-1/4">
            <Image
              src={"/w.readford.png"}
              height={300}
              width={300}
              alt="chef w.readford"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            onClick={() => router.push("/ourchefs")}
            className="border-2 border-solid border-orange-700 px-10 py-6 rounded-full flex items-center"
          >
            See More
          </Button>
        </div>
      </div>
      {/* testimonials */}
      <div className="mt-12 mb-28">
        <h3 className="pl-4 text-orange-700 font-bold text-4xl ml-24">Testimonials</h3>
        <h1 className="text-2xl font-extrabold pl-4 mt-4 ml-32">
          What our clients are saying
        </h1>

        {/* Client Image */}
        <div className="flex justify-center mt-4">
          <Image
            src={"/client.png"}
            height={100}
            width={100}
            alt="client-picture"
          />
        </div>

        {/* Testimonial Section */}
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto bg-white p-6 mt-6">
          <Image
            className="mx-auto pt-7"
            src={"/99.png"}
            height={200}
            width={50}
            alt="99"
          />
          <p className="text-gray-900 px-4 sm:px-8 text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel,
            amet dicta consequuntur soluta velit blanditiis, laudantium
            voluptate minima error quis quisquam tempora dignissimos deleniti
            cumque eveniet illum modi repellendus.
          </p>

          {/* Stars Rating */}
          <div className="flex flex-row pt-4 justify-center">
            <RiStarSFill size={20} className="text-yellow-300" />
            <RiStarSFill size={20} className="text-yellow-300" />
            <RiStarSFill size={20} className="text-yellow-300" />
            <RiStarSFill size={20} className="text-yellow-300" />
            <RiStarSFill size={20} className="text-gray-700" />
          </div>

          {/* Client Name and Title */}
          <h1 className="text-black font-semibold text-xl pt-2 text-center">
            Alamin Hassan
          </h1>
          <p className="text-black font-light text-center pt-1">
            Food Specialist
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-row gap-2 justify-center mt-8">
          <div className="h-3 w-3 rounded-full bg-orange-700"></div>
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
        </div>
      </div>
      {/* image */}
      <div className="mb-14">
        <Image
          src={"/restaurant active process.png"}
          height={400}
          width={1500}
          alt="picture"
        />
      </div>
      {/* blog part */}
      <div className="mb-14">
        {/* Title Section */}
        <h3 className="text-orange-700 text-center font-semibold">Blog Part</h3>
        <h2 className="text-orange-700 font-extrabold text-xl text-center mt-4">
          La <span className="text-white">test News And Blogs</span>
        </h2>

        {/* Blog Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {/* Blog Post 1 */}
          <div className="bg-white border border-gray-300 p-4">
            <div>
              <Image
                src={"/mushaom pizza.png"}
                height={250}
                width={250}
                alt="mushaoam pizza"
                className="w-full h-auto"
              />
            </div>
            <div className="h-[150px] mt-4">
              <h2 className="text-orange-700">10th February 2022</h2>
              <p className="font-semibold text-justify mt-2 text-orange-700">
                Pallentesque Non Efficuitur Mi Aliqum Convallis Mi Quis
              </p>
              <div className="flex justify-between mt-4">
                <p
                  onClick={() => router.push("/blog")}
                  className="underline cursor-pointer text-orange-700"
                >
                  Learn More
                </p>
                <Image src={"/Icon.png"} height={10} width={70} alt="icons" />
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white border border-gray-300 p-4">
            <div>
              <Image
                src={"/pizza.png"}
                height={250}
                width={250}
                alt="pizza"
                className="w-full h-auto"
              />
            </div>
            <div className="h-[150px] mt-4">
              <h2 className="text-orange-700">10th February 2022</h2>
              <p className="font-semibold text-justify mt-2 text-orange-700">
                Morbi Sodales Tellus Elit, in Blandit Suscipit A
              </p>
              <div className="flex justify-between mt-4">
                <p
                  onClick={() => router.push("/blog")}
                  className="underline cursor-pointer text-orange-700"
                >
                  Learn More
                </p>
                <Image src={"/Icon.png"} height={10} width={70} alt="icons" />
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white border border-gray-300 p-4">
            <div>
              <Image
                src={"/pizza.png"}
                height={250}
                width={250}
                alt="pizza"
                className="w-full h-auto"
              />
            </div>
            <div className="h-[150px] mt-4">
              <h2 className="text-orange-700">10th February 2022</h2>
              <p className="font-semibold text-justify mt-2 text-orange-700">
                Cura bitur Rutrum velit ac congue malesuada
              </p>
              <div className="flex justify-between mt-4">
                <p
                  onClick={() => router.push("/blog")}
                  className="underline cursor-pointer text-orange-700"
                >
                  Learn More
                </p>
                <Image src={"/Icon.png"} height={10} width={70} alt="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
