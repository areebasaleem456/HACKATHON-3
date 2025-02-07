"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const Error = () => {
  let router = useRouter();
  return (
    <div className="bg-white">
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
            404 Error
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <a href="/" className="text-white">
              Home{" "}
            </a>
            <span className="text-white"> &gt; </span>
            <a href="/about" className="text-orange-500">
              404
            </a>
          </div>
        </div>
      </div>

      <div className="h-auto bg-slate-100 px-4 md:px-6 lg:px-8 py-16">
        <h1 className="text-orange-700 text-4xl font-bold text-center md:text-5xl">
          404
        </h1>
        <h2 className="text-black text-2xl font-semibold text-center mt-4">
          Oops.. Looks like something went wrong.
        </h2>
        <p className="text-gray-900 text-center text-lg font-light mt-2">
          The page cannot be found.. we'll figure it out in no time.
        </p>
        <p className="text-gray-900 text-center font-light mt-2">
          Meanwhile, check out these fresh ideas:
        </p>
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => router.push("/")}
            className="bg-orange-700 h-10 w-32 flex justify-center p-2 md:w-48 md:h-12"
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
