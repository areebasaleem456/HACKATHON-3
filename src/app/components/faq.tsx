import React from "react";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="bg-white">
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
              FAQ Page
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <a href="/" className="text-white">
                Home{" "}
              </a>
              <span className="text-white"> &gt; </span>
              <a href="/about" className="text-orange-500">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-white">
        <div>
          <h1 className="text-black font-bold text-3xl text-center pt-20">
            Question Looks Here
          </h1>
          <h2 className="font-light text-gray-700 text-center pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in ipsum corporis rem minima quis.
          </h2>
        </div>

        <div className="flex flex-row">
          <div>
            <div className="h-40 bg-gray-100 mt-8 mr-20 ml-10">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  How we serve food?
                </h2>
                <p className="text-black font-semibold">+</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
            <div className="h-40 bg-gray-100 mt-4 mr-20 ml-10">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  How is our Food quality?
                </h2>
                <p className="font-semibold text-black">+</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
            <div className="h-40 bg-gray-100 mt-4 mr-20 ml-10">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  How do we give home delievery?
                </h2>
                <p className="text-black font-semibold pt-2">+</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
          </div>

          {/* second portion */}
          <div>
          <div className="h-40  bg-gray-100 mt-8 mr-20">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  How can we get in touch with you?
                </h2>
                <p className="text-black font-bold mr-6">-</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
            <div className="h-40 bg-gray-100 mt-4 mr-20">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  What will be delieverd? And When?
                </h2>
                <p className="font-bold text-black">+</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
            <div className="h-40 bg-gray-100 mt-4 mr-20">
              <div className="flex justify-between">
                <h2 className="text-black font-semibold pt-2 pl-2">
                  How do we give home delievery?
                </h2>
                <p className="text-black font-semibold pt-2">+</p>
              </div>
              <p className="text-gray-700 pt-2 pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                illo eum odit aliquid corrupti! Modi aliquid repellendus quasi
                alias distinctio voluptas est, consequatur excepturi id saepe
                omnis eveniet architecto iste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
