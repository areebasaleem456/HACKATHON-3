import React from "react"
export default function HelpSection() {
    const links = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy']
    return (
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 mr-20">
  <h3 className="text-xl font-bold mb-6 text-center sm:text-left">Help?</h3>
  <ul className="text-[16px] flex flex-col gap-4 leading-6">
    {links.map((link) => (
      <li key={link} className="mb-2">
        <a href="#" className="hover:text-[#FF9F0D] transition duration-300">
          {link}
        </a>
      </li>
    ))}
  </ul>
</div>

    )
  }
  
  