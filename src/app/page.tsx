"use client";
import About from "../app/about/page";
import Bloglist from "../app/blog/page";
import Cart from "../app/cart/page";
import CheckoutPage from "../app/checkout/page";
import Error from "../app/error/page";
import Faq from "./components/faq";
import Homepage from "../app/homepage/page";
import Menu from "../app/menu/page";
import Ourchefs from "../app/ourchefs/page";
import Shopdetails from "../app/shopdetails/page";
import Shoplist from "../app/shoplist/page";
import Signin from "../app/signin/page";
import Signup from "../app/signup/page";
import Blogdeatials from "../app/blogdetails/page";


export default function Home() {
  return (
    <div>
      <Homepage />
      <Menu />
      <Shoplist />
      <Shopdetails />
      <Cart />
      <Bloglist />
      <Blogdeatials />
      <Ourchefs />
      <CheckoutPage />
      <Faq />
      <Error />
      <Signin />
      <Signup />
      <About />
    </div>
  );
}
