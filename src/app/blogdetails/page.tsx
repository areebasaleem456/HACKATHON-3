import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

const Blogdeatials = () => {
    
  return (
    <div className="bg-white text-black pb-16">
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
              Blog Details
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                Blog Details
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
      <div className="ml-40 mt-20 w-[800px]">
        <Image
          className="h-[360px] w-[800px]"
          src={"/yogurt.png"}
          height={300}
          width={500}
          alt="lemon"
        />
        <div className="flex flex-row mt-4 gap-2">
          <Image src={"/Calendar.png"} height={30} width={30} alt="calendar" />
          <p className="font-medium text-lg text-gray-700">Feb 14, 2022 /</p>
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
        <p className="pt-10 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          reprehenderit dignissimos in vel voluptatem reiciendis debitis magnam
          voluptates iste quia labore expedita nostrum qui beatae perferendis
          quasi mollitia, repellat dicta.Accusantium veritatis repellat
          necessitatibus quasi quod quia illum natus, exercitationem temporibus
          pariatur nemo, obcaecati sequi.{" "}
        </p>
        <p className="pt-7 leading-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid
          rem cumque? Veritatis architecto veniam animi itaque temporibus iusto
          vel corporis aliquam sint. Alias rerum accusantium ipsa At sed ut
          ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum fugiat
          temporibus nemo id, eos repellat doloribus voluptatibus magni at.
        </p>
        <div className="flex flex-row h-[150px] w-full bg-orange-700 border-2 border-solid mt-10">
          <div className="h-[150px] w-[200px]">
            <Image
              className="pt-3 h-20 w-20 leading-loose pl-5"
              src={"/99.png"}
              height={30}
              width={30}
              alt="99"
            />
          </div>
          <p className="ml-5 pt-6 font-semibold text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            incidunt rerum, doloremque et tenetur ut hic recusandae quas natus
            itaque, dicta consectetur voluptate eius blanditiis nulla voluptas.
            Placeat, tenetur culpa! Est aspernatur facere architecto nisi odit
            corporis. Veritatis nisi ul altiquo areis.{" "}
          </p>
        </div>
        <p className="pt-10 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
          aspernatur tenetur! Atque maiores, saepe magni architecto vel voluptas
          assumenda quod natus deleniti ducimus sed, eos vero earum consequuntur
          amet reprehenderit? Provident, beatae facilis vitae a ipsam ullam,
          nobis aliquid non suscipit sint eligendi, consequatur est eveniet
          illum expedita molestias. Facilis fugiat, ratione ad distinctio
          veritatis natus fuga sunt itaque aperiam.
        </p>
        <div className="flex flex-row">
          <div className="flex flex-col ">
            <p className="w-[350px] text-gray-700 leading-relaxed pt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              quam quibusdam velit molestias harum obcaecati! Repellendus autem
              ea nostrum. Soluta modi nesciunt inventore, doloribus
              reprehenderit placeat est optio sed debitis. Quidem nobis fugit
              libero distinctio
            </p>
            <p className="text-gray-700 pt-5 w-[350px] leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              commodi eligendi laborum, inventore impedit nam distinctio
              consequatur vitae nostrum ratione perferendis exercitationem
              aspernatur voluptas consectetur suscipit amet provident nobis.
              Quidem?
            </p>
          </div>
          <Image
            className="h-[350px] w-[450px] pt-10 pl-10 "
            src={"/chopsticks.png"}
            height={200}
            width={200}
            alt="eggs"
          />
        </div>
        <p className="pt-10 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius hic
          maiores, tenetur voluptatem aut, consequatur recusandae incidunt
          voluptas veritatis natus obcaecati. Quasi, quisquam eveniet vero
          quaerat labore harum officia illo ent nesciunt cupiditate maxime
          perferendis similique autem numquam expedita reiciendis vel.
        </p>
        <p className="pt-10 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius hic
          maiores, tenetur voluptatem aut, consequatur recusandae incidunt
          voluptas veritatis natus obcaecati. Quasi, quisquam eveniet vero
          quaerat labore harum officia illo ent nesciunt cupiditate maxime
          perferendis similique autem numquam expedita reiciendis vel.
        </p>
        <div className="border-2 border-solid border-gray-400 h-[50px] w-full mt-5">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row p-3">
              <h2 className="font-semibold ">Tags:</h2>
              <p className="text-gray-400 pl-2">Restaurant, Dinner, Pizza, Yummy</p>
            </div>
            <div className="flex flex-row  p-3">
              <div className="flex flex-row gap-3">
                <h2 className="font-semibold text-gray-700">Share:</h2>
                <FaTwitter className="text-gray-700" size={20} />
                <FaYoutube className="text-gray-700" size={20} />
                <FaInstagram className="text-gray-700" size={20}  />
                <FaFacebook className="text-gray-700" size={20} />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-extrabold text-2xl pt-10">Comments - 03</h2>
        {/* comment div1 */}
        <div className="flex flex-row h-[150px] w-full mt-5">
           <Image className="h-[60px] w-[60px] p-1" src={"/sojibkhan.png"} height={20} width={20} alt="person1"/>
           <div className="flex flex-col">
            <div className="flex flex-row gap-10">
                <h2 className="font-bold pt-1">MD Sojib Khan</h2>
               <Image className="h-5 w-14 pt-1" src={"/Reply.png"} height={20} width={20} alt="reply"/>
            </div>
            <div className="flex flex-row gap-2 mt-1">
                <Image src={"/CalendarBlank.png"}  height={10} width={20} alt="calendar"/>
                <p className="text-gray-700  "> June 22,2022</p>
            </div>
            <p className="pt-1 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim incidunt magnam vitae fuga ullam expedita,fusce hemedrit faucilious soliitude.</p>
           </div>
        </div>
        {/* comment div2 */}
        <div className="flex flex-row h-[150px] w-full ml-14">
           <Image className="h-[60px] w-[60px] p-1" src={"/moon khan.png"} height={20} width={20} alt="person1"/>
           <div className="flex flex-col">
            <div className="flex flex-row gap-10">
                <h2 className="font-bold pt-1">MD Moon Khan</h2>
               <Image className="h-5 w-14 pt-1" src={"/Reply (1).png"} height={20} width={20} alt="reply"/>
            </div>
            <div className="flex flex-row gap-2 mt-1">
                <Image src={"/CalendarBlank.png"}  height={10} width={20} alt="calendar"/>
                <p className="text-gray-700  "> June 22,2022</p>
            </div>
            <p className="pt-1 leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim incidunt magnam vitae fuga ullam expedita,fusce hemedrit faucilious soliitude.</p>
           </div>
        </div>
        {/* coomment div3 */}
        <div className="flex flex-row h-[150px] w-full mt-5">
           <Image className="h-[60px] w-[60px] p-1" src={"/gullikhan.png"} height={20} width={20} alt="person1"/>
           <div className="flex flex-col">
            <div className="flex flex-row gap-10">
                <h2 className="font-bold pt-1">MD Gulli Khan</h2>
               <Image className="h-5 w-14 pt-1" src={"/Reply.png"} height={20} width={20} alt="reply"/>
            </div>
            <div className="flex flex-row gap-2 mt-1">
                <Image src={"/CalendarBlank.png"}  height={10} width={20} alt="calendar"/>
                <p className="text-gray-700  "> June 22,2022</p>
            </div>
            <p className="pt-1 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim incidunt magnam vitae fuga ullam expedita,fusce hemedrit faucilious soliitude.</p>
           </div>
        </div>
        <h2 className="font-semibold pt-7 text-2xl">Post a comment</h2>
        <hr className="mt-5 border-gray-400" />
       <div className="flex flex-row">
        <div className="h-10 w-[380px] border-2 border-solid border-gray-400 mt-6 p-2 text-gray-800">Name*</div>
        <div className="h-10 w-[380px] border-2 border-solid border-gray-400 mt-6 p-2 text-gray-800 ml-10">Email*</div>
       </div>
       <textarea className="border-2 border-solid border-gray-400 w-full mt-6 text-gray-800 p-2 " name="comment" id="comment" rows={8}>Write a comment</textarea>
       <div className="h-10 w-56 bg-orange-700 mt-6 text-white text-center pt-2">Post a comment </div>
      </div>
      {/* sidebar */}
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
  );
};

export default Blogdeatials;



// copying

