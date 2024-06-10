import Image from "next/image";
import Header from "./components/header";
import Feature from "./components/feature";
import Products from "./components/products";
import AboutUs from "./components/about_us";
import AllProducts from "./components/all_products";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import TryOutSection from "./components/tryoutsection";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

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
