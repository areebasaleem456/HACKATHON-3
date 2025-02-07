import HelpSection from './helpfooter';
import NewsletterSection from "./newsletterfooter";
import RecentPostsSection from "./recentpostfooter";
import AboutUsSection from './aboutfooter';
import SocialIcons from './socialiconfooter';


export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white mt-[120px]">
  <div className="container mx-auto px-4 py-16">
    <NewsletterSection />
    <div className="border-t border-[#FF9F0D] my-8"></div>
    <div className="flex flex-col md:flex-row justify-between items-center mt-[56px] gap-8 md:gap-0">
      <AboutUsSection />
      <HelpSection />
      <RecentPostsSection />
    </div>
  </div>
  <div className="bg-[#4F4F4F] py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-[16px] leading-6 mb-4 md:mb-0 text-center md:text-left">
        Copyright © 2022 by Areeba. All Rights Reserved.
      </p>
      <SocialIcons />
    </div>
  </div>
</footer>


  )
}
