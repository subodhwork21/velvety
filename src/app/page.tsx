import Image from "next/image";
import Header from "./modules/header";
import Feature from "./modules/feature";
import Products from "./modules/products";
import AboutUs from "./modules/about_us";
import AllProducts from "./modules/all_products";
import Service from "./modules/service";
import Testimonial from "./modules/testimonial";
import TryOutSection from "./modules/tryoutsection";
import Subscribe from "./modules/subscribe";
import Footer from "./modules/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Products />
      <AboutUs />
      <AllProducts />
      <Service />
      <Testimonial />
      <TryOutSection />
      <Subscribe />
      <Footer />
    </>
  );
}
