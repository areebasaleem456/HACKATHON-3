import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";


const Nav = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between pt-8 px-4">
  {/* Links Section */}
  <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left ml-3">
    <Link className="cursor-pointer hover:text-orange-700" href={"/"}>Home</Link>
    <Link className="cursor-pointer hover:text-orange-700" href={"/menu"}>Menu</Link>
    <Link className="cursor-pointer hover:text-orange-700" href={"/blog"}>Blog</Link>
    <Link className="cursor-pointer hover:text-orange-700" href={"/about"}>About</Link>
    <Link className="cursor-pointer hover:text-orange-700" href={"/shoplist"}>Shop</Link>
    <Link className="cursor-pointer hover:text-orange-700" href={"/ourchefs"}>Chefs</Link>
  </div>

  {/* Search Box and Cart Icon */}
  <div className="flex justify-between md:hidden items-center mt-4">
    <div className="relative w-3/4">
      <input
        type="text"
        placeholder="Search..."
        className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500 w-full"
      />
      <span className="absolute top-2.5 right-3">
        <CiSearch />
      </span>
    </div>
    <IoBagHandle className="w-[24px] h-[24px] ml-4" />
  </div>

  {/* Desktop view for search and cart */}
  <div className="hidden md:flex items-center space-x-2">
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="bg-black border border-[#FF9F0D] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-500"
      />
      <span className="absolute top-2.5 right-3">
        <CiSearch />
      </span>
    </div>
    <IoBagHandle className="w-[24px] h-[24px]" />
  </div>
</header>

  );
};

export default Nav;
