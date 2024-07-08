import Image from "next/image";
import ProductItem from "../components/productItem";
const Products = () => {
  return (
    <section className="max-w-[1440px] mx-auto z-20 md:pb-[0px] pb-[64px] relative grid lg:grid-cols-3 grid-cols-1 border-secondary bg-secondarygray">
      <ProductItem
        image={"/images/productimage1.png"}
        name={"Chicori"}
        price={20}
        type={"rect"}
      />
      <ProductItem
        image={"/images/productimage2.png"}
        name={"Notorious"}
        price={23}
        type={"circle"}
      />
      <ProductItem
        image={"/images/productimage3.png"}
        name={"Holocena"}
        price={20}
        type={"rect"}
      />
    </section>
  );
};

export default Products;
