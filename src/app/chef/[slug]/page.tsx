import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Chef } from "../../../../types/chefs";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { FaShoppingCart, FaRegHeart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";

interface ChefPageProps {
    params: Promise<{ slug: string }>;
  }

  async function getChefs(slug: string): Promise<Chef> {
    return client.fetch(
      groq`*[_type == "chef" && slug.current == $slug][0]{
          
          name,
          _type,
          image,
          position,
          description,
          experience,
          }`,
      { slug }
    );
};
export default async function ChefPage({params}: ChefPageProps) {
    const { slug } = await params;
    const chef = await getChefs(slug);
    return(
        <div>
      <div className="w-full px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square ml-20">
            {chef.image && (
              <Image
                src={urlFor(chef.image).url()}
                alt={chef.name}
                width={400}
                height={400}
                className="rounded-lg shadow-md mt-20 ml-20"
              />
            )}
          </div>
          {/* detailpage copy */}
          <div className="m-10 ">
            <div>
              <h2 className="font-extrabold text-3xl mt-20 ">{chef.name}</h2>
              <p className="w-96 mt-5 text-gray-700">{chef.description}</p>
              <hr className="mt-5" />
              <p className="font-semibold text-xl mt-5">
                Position Of Chef: {chef.position} 
              </p>
              <p className="font-semibold text-xl mt-5">
                Experience Of Chef: {chef.experience} Years
              </p>

              <hr className="mt-5" />
            </div>
            {/* wishlist */}
            <div>
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
    </div>
    )
}
