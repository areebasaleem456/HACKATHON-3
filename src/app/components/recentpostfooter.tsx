import React from "react"
import Image from "next/image"
export default function RecentPostsSection() {
    const posts = [
      { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/yogurt.png" },
      { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/yogurt.png" },
      { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/yogurt.png" },
    ]
  
    return (
      <div className="w-full sm:w-[273.83px] px-4 mr-20">
  <h3 className="text-xl font-bold mb-8 text-center sm:text-left">Recent Post</h3>
  {posts.map((post, index) => (
    <div key={index} className="flex items-center mb-4 flex-wrap sm:flex-nowrap">
      <Image
        src={post.image}
        height={30}
        width={30}
        alt=""
        className="w-16 h-16 object-cover mr-4 mb-4 sm:mb-0"
      />
      <div>
        <h4 className="font-semibold mb-1 text-sm sm:text-base">{post.title}</h4>
        <p className="text-xs sm:text-sm text-gray-400">{post.date}</p>
      </div>
    </div>
  ))}
</div>

    )
  }
  
  