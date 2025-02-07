"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayOutline } from "react-icons/io5";



export default function About() {
  let router=useRouter()
  return (
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
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">Home</a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">About</a>
          </div>
        </div>
      </div>

      {/* Second Section: Content and Buttons */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center">
          {/* Left Text (takes 70% width) */}
          <div className="w-full md:w-7/10 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button onClick={()=>(router.push("/menu"))} className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </Button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images (takes 30% width) */}
          <div className="w-full md:w-3/10 flex flex-col space-y-4 mt-10 ">
            <Image
              className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"  // Responsive width and height
              alt="hero"
              src={"/lemon.png"}
              width={400}
              height={600}
            />
            <div className="md:flex flex-col mt-10 gap-5  space-x-4">
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image2"
                src={"/yogurt.png"}
                width={404}
                height={400}
                layout="intrinsic"
              />
              <Image
                className="object-cover object-center w-[200px] h-32 md:h-40 rounded-lg"
                alt="image3"
                src={"/pastaa.png"}
                height={300}
                width={400}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black text-3xl font-bold mt-3 mb-6">Why Choose Us</h1>
          <p className="text-center mb-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-[300px] md:h-[400px] rounded-lg" // Responsive width and height
            alt="Why Choose Us"
            src={"/third_section.png"}
            width={2000}
            height={480}
          />
        </div>
      </section>

      {/* Fourth Section: Features */}
      <section className="text-black body-font bg-white">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/bestchef.png"}
                  alt="Best Chef"
                  width={17}
                  height={17}
                  
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/Vector.png"}
                  alt="120 Item Food"
                  width={4}
                  height={2}
                  
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    120 Item Food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-full object-cover object-center"
                  src={"/Person.png"}
                  alt="Clean Environment"
                  width={400}
                  height={200}
                  
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image src={"/Team Member.png"} height={200} width={2300} alt="team member">

              </Image>
            </div>
            <div>
              <Image src={"/Testimonials.png"} height={200} width={600} alt="testinomials" className="ml-[300px]"></Image>
            </div>
            <div>
              <Image src={"/Food Menu.png"} height={200} width={400} alt="food-menu" className="ml-[400px]"></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
