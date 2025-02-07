import React from "react"
import { CiFacebook,CiTwitter,CiInstagram,CiYoutube } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";
export default function SocialIcons() {
    const icons = [
      { Icon: CiFacebook, color: 'text-[#1E1E1E]' },
      { Icon: CiTwitter, color: 'text-[#1E1E1E]' },
      { Icon: CiInstagram, color: 'text-[#1E1E1E]' },
      { Icon: CiYoutube, color: 'text-[#FF9F0D]' },
      { Icon: CiMapPin , color: 'text-[#1E1E1E]' },
    ]
  
    return (
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-4 md:space-x-4 lg:space-x-4">
  {icons.map(({ Icon, color }, index) => (
    <a
      key={index}
      href="#"
      className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300 mb-4 sm:mb-0`}
    >
      <Icon size={16} />
    </a>
  ))}
</div>

    )
  }