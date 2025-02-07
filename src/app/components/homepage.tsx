import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

function Homepage() {
  return (
    <div className="flex flex-col  ">
      <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center ">
        {/* Heading */}
        <div className="text-white w-full md:w-[50%]">
          <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-orange-700 whitespace-nowrap text-center md:text-left">
            Its Quick & Amusing!
          </h1>

          <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
            <span className="text-orange-700">Th</span>e Art of Speed Food
            Quality
          </h1>

          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
            <button className="bg-orange-700 text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
              See More
            </button>
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

      <div className="flex flex-row md:flex-row justify-between items-center p-3">
        <div className=" md:w-[700px] w-full text-center md:text-left">
          <h2 className="text-3xl font-bold ml-[130px] text-orange-700">
            about us
          </h2>
          <p className="text-orange-700 text-3xl font-bold ml-[130px] gap-3">
            We{" "}
            <span className="text-white font-semibold"> Create The Best </span>{" "}
            <br />{" "}
            <span className="text-white font-semibold leading-7">
              {" "}
              Foody Product
            </span>
          </p>
          <p className="mt-4 ml-[130px] flex justify-start ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse enim
            magni adipisci dicta voluptate, corporis velit tempore quos, ea
            eveniet nam consectetur et sed molestiae inventore natus excepturi
            sit quidem!
          </p>

          <div className="flex flex-col mt-6">
            <div className=" flex flex-row items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>
                lacus nisi et ac similique excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex flex-row  items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>
                Quisquie diam pallenteque excepturi quaerat qui incidunt amet.
              </p>
            </div>
            <div className="flex flex-row  items-center space-x-2">
              <TiTick className="ml-[130px]" />
              <p>Lorem ispum dilor excepturi quaerat qui incidunt amet.</p>
            </div>
            <button className="bg-orange-700 text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 ml-[130px] mt-6">
              Read More
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 text-center md:text-left mr-[120px]">
          <div className="mb-4">
            <Image
              src={"/egg.png"}
              height={500}
              width={600}
              alt="egg picture"
            ></Image>
          </div>
          <div className="flex flex-row justify-center md:justify-start space-x-4">
            <div className="w-[300px] h-[400px]">
              <Image
                src={"/sauce.png"}
                height={400}
                width={300}
                alt="sauce picture"
              ></Image>
            </div>
            <div className="w-[300px] h-[00px]">
              <Image
                src={"/toast.png"}
                height={400}
                width={300}
                alt="toast picture"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-orange-700 font-serif font-semibold text-center">
          Food Catergory
        </h2>
        <p className="text-orange-700 text-center text-2xl py-4">
          Ch{" "}
          <span className="text-white text-center font-extrabold text-2xl">
            oose Food Iteams
          </span>
        </p>
        <div className="flex flex-row mt-10 gap-4 ">
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item1.png"}
              height={400}
              width={400}
              alt="item1"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item2.png"}
              height={400}
              width={400}
              alt="item2"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item3.png"}
              height={400}
              width={400}
              alt="item3"
            ></Image>
          </div>
          <div className="w-1/2 sm:w-1/4 p-2">
            <Image
              src={"/item4.png"}
              height={400}
              width={400}
              alt="item4"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-row  ">
        <div className="pt-36 ml-[120px] ">
          <div className="flex flex-row">
            <div>
              <Image
                src={"/lemon.png"}
                height={400}
                width={200}
                alt="picture"
              ></Image>
            </div>

            <div>
              <Image
                className="pt-24 py-3 ml-2"
                src={"/item2.png"}
                height={200}
                width={200}
                alt="picture"
              ></Image>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row">
              <div className="pt-2">
                <Image
                  src={"/yogurt.png"}
                  height={600}
                  width={100}
                  alt="picture"
                ></Image>
              </div>
              <div>
                <Image
                  className="py-3 ml-3"
                  src={"/Mask Group (2).png"}
                  height={150}
                  width={150}
                  alt="picture"
                ></Image>
              </div>
            </div>
            <div className="ml-2">
              <div className="flex flex-col">
                <Image
                  src={"/fries.png"}
                  height={100}
                  width={108}
                  alt="picture"
                ></Image>
              </div>
              <div>
                <Image
                  className="pt-3"
                  src={"/pasta2.png"}
                  height={100}
                  width={108}
                  alt="picture"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-48 mt-36  md:ml-24 lg:ml-48 px-4 py-8">
          <h2 className="text-2xl font-semibold text-orange-700 ">
            why choose us
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mt-2">
            Ex{" "}
            <p className="text-white block">
              ta Ordinary Taste <br /> And Experiense
            </p>
          </h1>
          <p className="w-44 md:w-96 text-white mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            unde neque sit minus perferendis at commodi animi mollitia placeat.
            Voluptatem asperiores quae tempore quaerat esse sapiente amet ipsa
            laboriosam
          </p>
          <div className="flex flex-row flex-wrap gap-7 mt-6">
            <div className=" mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
              <IoFastFoodOutline size={40} />
            </div>
            <div className=" mr-7 h-16 w-16 bg-orange-700 flex items-center justify-center">
              <MdLunchDining size={40} />
            </div>
            <div className="h-16 w-16 bg-orange-700 flex items-center justify-center">
              <MdOutlineDinnerDining size={40} />
            </div>
          </div>
          <div className="flex flex-row  flex-wrap mt-6 items-center">
            <div className="h-16 w-2 bg-orange-700 "></div>
            <div className="h-16 w-20 bg-white text-orange-700 text-center flex items-center justify-center font-extrabold text-3xl p-4">
              30+{" "}
            </div>
            <div className=" h-16 w-40 text-black font-semibold bg-white text-center flex items-center justify-center">
              Years Of
              <br />
              Experience
            </div>
          </div>
        </div>
      </div>
      <div className="client-picture">
        <Image src={"/Clients.png"} height={600} width={3300} alt="clients" />
      </div>
      <div className="mb-20">
      <div className="mt-16 ">
        <h3 className="text-orange-700 font-semibold text-center">
          Choose & Pick
        </h3>
        <h3 className="text-center text-orange-700 font-extrabold text-2xl mt-6">
          Fr <span className="text-white ">om Our Menu</span>
        </h3>
      </div>
      <div className="flex flex-row gap-24 mt-6 pl-5">
        <h3 className="text-orange-700">Breakfast</h3>
        <h3>Lunch</h3>
        <h3>Dinner</h3>
        <h3>Desert </h3>
        <h3>Drink</h3>
        <h3>Snacks</h3>
        <h3>Soups</h3>
      </div>
      <div className="flex flex-row mt-10 justify-center gap-12">
        <div className="flex flex-col">
          <Image src={"/salad.png"} height={350} width={350} alt="salad" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              className="rounded-xl"
              src={"/lettuce leaf.png"}
              height={20}
              width={70}
              alt="lettuce leaf"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Lettuce Leaf</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/Mask Group (2).png"}
              height={20}
              width={70}
              alt="fresh breakfast"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Fresh Breakfast</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">14.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/mild butter.png"}
              height={20}
              width={70}
              alt="mild butter"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Mild Butter</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/fresh bread.png"}
              height={20}
              width={70}
              alt="fresh bread"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Fresh Bread</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              className="rounded-xl"
              src={"/glow cheese.png"}
              height={20}
              width={70}
              alt="glow cheese"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Glow Cheese</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/italian pizza.png"}
              height={20}
              width={70}
              alt="italian pizza"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Italian Pizza</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">14.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/slice beef.png"}
              height={20}
              width={70}
              alt="slice beef"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Slice Beef</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <Image
              className="rounded-xl"
              src={"/mushaom pizza.png"}
              height={20}
              width={70}
              alt="mushaom pizza"
            />
            <div className="flex flex-col">
              <h3 className="pl-2 font-semibold">Mushaom Pizza</h3>
              <h4 className="pl-2 font-light">
                lacus nisi, et ac dapibus walet in consiquet
              </h4>
              <p className="pl-2 text-orange-700">12.5$</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="mt-12 mb-12">
        <h3 className="text-orange-700 text-center font-semibold text-xl">Chefs</h3>
        <h2 className="text-orange-700 font-extrabold text-2xl text-center mt-4">Me <span className="text-white">et Our Chefs</span></h2>
        <div className="flex flex-row justify-evenly mt-6">
         <Image src={"/d.estwood.png"} height={300} width={300} alt=" chef d.estwood "/>
         <Image src={"/d.scroiesh.png"} height={300} width={300} alt="chef d.scroshie"/>
         <Image src={"/Chef Card 1.png"} height={300} width={300} alt="m.william" />
         <Image src={"/w.readford.png"} height={300} width={300} alt="chef w.readford" />
        </div>
        <button className="flex border-2 border-solid border-orange-700 px-10 py-4 mt-16 rounded-full items-center ml-[650px]">See More </button>
      </div>
      <div className="mt-12 mb-28">
        <h3 className="pl-4 text-orange-700 font-semibold">Testimonials</h3>
        <h1 className="text-2xl font-extrabold pl-4 mt-4">What our clients are saying</h1>
        <div className="ml-[650px]">
         <Image src={"/client.png"} height={100} width={100} alt="client-picture"/>
        </div>
        <div className="h-[300px] w-[600px] bg-white ml-[400px]">
          <Image className="ml-[280px] pt-7 " src={"/99.png"} height={200} width={50} alt="99"/>
          <p className="text-gray-900 px-16 pt-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vel, amet dicta consequuntur soluta velit blanditiis, laudantium voluptate minima error quis quisquam tempora dignissimos deleniti cumque eveniet illum modi repellendus.</p>
          <div className="flex flex-row pt-4 justify-center">
        <RiStarSFill size={20} className="text-yellow-300"/>
        <RiStarSFill size={20} className="text-yellow-300"/>
        <RiStarSFill size={20} className="text-yellow-300"/>
        <RiStarSFill size={20}  className="text-yellow-300"/>
        <RiStarSFill size={20} className="text-gray-700"/>
        </div>
        <h1 className="text-black font-semibold text-xl pt-2 text-center">Alamin Hassan</h1>
        <p className="text-black font-light text-center pt-1">Food Specialist</p>
        </div>
        <div className="flex flex-row gap-1 justify-center mt-8">
        <div className="h-3 w-3 rounded-full bg-orange-700"></div>
        <div className="h-3 w-3 rounded-full bg-orange-500"></div>
        <div className="h-3 w-3 rounded-full bg-orange-500"></div>
        <div className="h-3 w-3 rounded-full bg-orange-500"></div>
      </div>
      </div>
      <div className="mb-14">
        <Image src={"/restaurant active process.png"} height={400} width={1500} alt="picture"/>
      </div>
      <div className="mb-14">
        <h3 className="text-orange-700 text-center font-semibold">Blog Part</h3>
        <h2 className="text-orange-700 font-extrabold text-xl text-center mt-4">La <span className="text-white">test News And Blogs</span></h2>
        <div className="flex flex-row border-white justify-center gap-40">
          <div>
            <div >
            <Image src={"/mushaom pizza.png"} height={250} width={250} alt="mushaoam pizza"/>
            </div>
            <div className="h-[150px] w-[250px] border-solid border-2">
              <h2 className="text-orange-700 pl-2 pt-2">10th February 2022</h2>
             <p className="font-semibold pl-2 text-justify pt-2 pr-2">Pallentesque Non Efficuitur Mi Aliqum Convallis Mi Quis</p>
             <div className="flex flex-row justify-between mt-2">
             <p className="pl-2 pt-4">Learn More</p>
             <Image src={"/Icon.png"} height={10} width={70} alt="icons" />
             </div>
            </div>
          </div>
          <div>
            <div >
            <Image className="h-[250px]" src={"/pizza.png"} height={300} width={250} alt="mushaoam pizza"/>
            </div>
            <div className="h-[150px] w-[250px] border-solid border-2">
              <h2 className="text-orange-700 pl-2 pt-2">10th February 2022</h2>
             <p className="font-semibold pl-2 text-justify pt-2 pr-2">Morbi Sodales Tellus Elit, in Blandit Suscipit A</p>
             <div className="flex flex-row justify-between mt-2">
             <p className="pl-2 pt-4">Learn More</p>
             <Image src={"/Icon.png"} height={10} width={70} alt="icons" />
             </div>
            </div>
          </div>
          <div>
            <div >
            <Image className="h-[250px]" src={"/pizza.png"} height={300} width={250} alt="mushaoam pizza"/>
            </div>
            <div className="h-[150px] w-[250px] border-solid border-2">
              <h2 className="text-orange-700 pl-2 pt-2">10th February 2022</h2>
             <p className="font-semibold pl-2 text-justify pt-2 pr-2">Cura bitur Rutrum velit ac congue malesuada</p>
             <div className="flex flex-row justify-between mt-2">
             <p className="pl-2 pt-4">Learn More</p>
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
