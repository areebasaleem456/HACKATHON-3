import { CiClock1 } from "react-icons/ci";   
export default function AboutUsSection() {
    return (
      <div className="w-full max-w-[395.2px] mx-auto ml-20 md:text-left">
  <h3 className="text-xl font-bold mb-8">About Us.</h3>
  <p className="mb-6 text-[18px] leading-[26px]">
    Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the World.
  </p>
  <div className="flex flex-col md:flex-row items-start gap-4">
    <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px] flex justify-center items-center">
      <CiClock1 className="text-white" />
    </div>
    <div>
      <h4 className="font-semibold">Opening Hours</h4>
      <p className="text-sm">Mon - Sat (8.00 - 6.00)</p>
      <p className="text-sm">Sunday - Closed</p>
    </div>
  </div>
</div>

    )
  }