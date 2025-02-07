import React from 'react'
import Nav from './nav'
const Header = () => {
  return (
    <div>
  <Nav />
  <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
    <h2 className="text-[24px] font-bold md:text-[28px] lg:text-[32px]">
      <span className="text-orange-700">Food</span>Tuck
    </h2>
  </header>
</div>

  )
}

export default Header