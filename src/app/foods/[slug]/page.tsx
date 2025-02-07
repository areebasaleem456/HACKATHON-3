
import { client } from "@/sanity/lib/client";
import { Food } from '../../../../types/foods';
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FaFacebook,
  FaInstagram,
  FaSquareYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Cart from "@/app/components/cart";
import { useState} from 'react';


interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
 
 async function getFoods(slug: string): Promise<Food> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,
        description,
        originalPrice,
        discountPrice,
      
        }`,
    { slug }
  );
}

export default async function FoodPage({ params }: ProductPageProps) {

  const { slug } = await params;
  const food = await getFoods(slug);
  return (
    <div>
      <div className="w-full px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square ml-20">
            {food.image && (
              <Image
                src={urlFor(food.image).url()}
                alt={food.name}
                width={400}
                height={400}
                className="rounded-lg shadow-md mt-20"
              />
            )}
          </div>
          {/* detailpage copy */}
          <div className="m-10 ">
            {/* instock */}
            <div className="flex flex-row gap-60">
              <div className="h-8 w-28 bg-orange-700 text-white pt-1 pl-2">
                In Stock
              </div>
              <div>
                <Image
                  src={"/Group 1000002153.png"}
                  height={100}
                  width={100}
                  alt="prev-next"
                />
              </div>
            </div>
            <div>
              <h2 className="font-extrabold text-3xl mt-5 ">{food.name}</h2>
              <p className="w-96 mt-5 text-gray-700">{food.description}</p>
              <hr className="mt-5" />
              <p className="font-semibold text-xl mt-5">
                ${food.originalPrice}
              </p>
              <div className="flex flex- mt-2">
                <RiStarSFill className="text-yellow-600 " />
                <RiStarSFill className="text-yellow-600 ml-1" />
                <RiStarSFill className="text-yellow-600 ml-1" />
                <RiStarSFill className="text-yellow-600 ml-1" />
                <RiStarSFill className="text-yellow-600 ml-1" />
                <p className="ml-7 text-gray-700">| 5.0Ratings</p>
                <p className="ml-7 text-gray-700">| 22 Reviews</p>
              </div>
              <p className="mt-2 text-gray-700">Dictum/cursus/Risus</p>
              <div className=" mt-4">
                
                <div className="h-10 w-40 border-orange-700 border-2 border-solid bg-orange-700 text-white flex flex-row gap-4 cursor-pointer hover:bg-slate-800">
                  <FaShoppingCart size={30} className="pt-2 " />{" "}
                  <Button  className="pt-3 bg-orange-700 text-white">
                    Add To Cart
                  </Button>
                  
                </div>
              </div>
              <hr className="mt-5" />
            </div>
            {/* wishlist */}
            <div>
              <div className="flex flex-row mt-5">
                <div className="">
                  <FaRegHeart />
                </div>
                <h2 className="ml-2">Add To Wishlist</h2>
                <div>
                  <Image
                    className="ml-3"
                    src={"/Project Status.png"}
                    height={20}
                    width={20}
                    alt="projuct-status"
                  />
                </div>
                <h2 className="ml-3">Compare</h2>
              </div>

              <h2 className="mt-3 text-gray-700">Tag:Our Shop</h2>
              <div className="flex flex-row">
                <h2 className="text-gray-700 mt-3">Share:</h2>
                <div className="flex flex-row mt-3">
                  <FaSquareYoutube size={20} className="ml-2" />
                  <FaFacebook size={20} className="ml-2" />
                  <FaTwitter size={20} className="ml-2" />
                  <FaInstagram size={20} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom area main div*/}
      <div className="ml-20 mr-20">
        {/* description */}
        <div className="flex flex-row">
          <div className="h-10 w-36 bg-orange-700 text-white font-semibold pt-2 pl-2">
            Description
          </div>
          <h2 className="font-semibold ml-6 pt-2">Reviews (24)</h2>
        </div>
        {/* bottom arae */}
        <div>
          <p className="text-gray-700 mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi
            accusamus animi repudiandae nisi dicta porro quasi quibusdam quia
            quae nostrum ducimus repellendus, pariatur dignissimos corporis
            quaerat facilis, explicabo architecto? Laborum eum quo ut fugit
            voluptatem, nisi ipsam numquam aliquam sit eos totam animi officiis
            eius explicabo nostrum cumque a tempore inventore. Accusamus
            possimus modi, velit rerum aliquam repellat voluptatum.
          </p>
          <p className="mt-7 text-gray-700 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            cumque in blanditiis. Sequi ipsam exercitationem quia inventore
            incidunt possimus voluptatum asperiores! Corrupti accusantium enim,
            similique totam aperiam explicabo quaerat nemo! Laboriosam amet ea
            maxime minus quos? Necessitatibus corporis, ex rerum explicabo
            repellendus praesentium asperiores fugit recusandae vero voluptas
            totam dicta. Laudantium consectetur inventore similique cum iure
            delectus, quo perspiciatis quos?
          </p>
          <h2 className="text-xl font-medium mt-3">Key Benifits</h2>
          <ul className="text-gray-700 mt-3 ">
            <li className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
            </li>
            <li className="pt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
            </li>
            <li className="pt-1 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
            </li>
            <li className="pt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
            </li>
          </ul>
          <div className="flex justify-between  mt-10">
            <h1 className="font-semibold text-xl">Similar Products</h1>
            <Image
              src={"/Arrow icon.png"}
              height={50}
              width={80}
              alt="arrow icons"
            />
          </div>
          <div className="flex flex-row mt-10 gap-5">
            <div>
              <Image
                src={"/Mask Group.png"}
                height={300}
                width={300}
                alt="fresh lime"
              />
              <h1 className="font-semibold ">Fresh Lime</h1>
              <div className="flex flex-row gap-5">
                <p className="text-orange-700">$38.00</p>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
            <div>
              <Image
                src={"/Mask Group (1).png"}
                height={300}
                width={300}
                alt="chicken muffin"
              />
              <h1 className="font-semibold ">Chicken Muffin</h1>
              <p className="text-orange-700">$28.00</p>
            </div>
            <div>
              <Image
                src={"/Mask Group (2).png"}
                height={300}
                width={300}
                alt="burger"
              />
              <h1 className="font-semibold ">Burger</h1>
              <p className="text-orange-700">$21.00</p>
            </div>
            <div>
              <Image
                src={"/Mask Group.png"}
                height={300}
                width={300}
                alt="fresh lime"
              />
              <h1 className="font-semibold ">Fresh Lime</h1>
              <div className="flex flex-row gap-5 mb-10">
                <p className="text-orange-700">$38.00</p>
                <p className="text-gray-700 line-through">$45.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
