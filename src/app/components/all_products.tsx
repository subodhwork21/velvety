import Image from "next/image";
import SmallProductItem from "./small_productItem";
import { Button2 } from "./button";

const AllProducts = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="lg:px-20 px-4 py-10 bg-primary flex lg:justify-between justify-start items-start gap-6 lg:gap-0 lg:items-center lg:flex-row flex-col">
        <p className="font-ivymodeLight lg:text-[40px] text-[38px] text-secondarygray">
          Let us see the processing of our products
        </p>
        <Image
          src={"/logos/arrowright.svg"}
          width={66}
          height={40}
          alt="arrowright"
        ></Image>
      </div>
      <div className="lg:py-[96px] py-[64px] px-4 lg:px-[80px] gap-[98px] flex justify-center items-center lg:flex-row flex-col bg-secondarygray">
        <div className="flex flex-col justify-left items-left w-[532px]">
          <p className="uppercase text-[28px] font-aillight text-primary pb-4">
            All Products
          </p>
          <p className="font-ivymodeLight text-[56px] mb-10 text-primarygray">
            Mild skincare & facial routine
          </p>
          <div className="flex justify-left items-center gap-4 flex-wrap">
            <p className="text-primarygray text-[18px] px-5 py-2 rounded-[40px] bg-secondary">
              All needs
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Protect
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Regenerates
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Revitalizes
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Feeds{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Regulates{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Purifies{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Makeup Removal{" "}
            </p>

            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Exfoliate{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Antioxidant{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Soothes{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Smoothes skin texture{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Tones{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Anti-waste{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Hydrate{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Strengthens{" "}
            </p>
            <p className="text-primary text-[18px] px-4 py-2 rounded-[40px] border-[1px] border-primary">
              Regenerates after UV exposure Strengthens{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-10 lg:mb-[21px] mb-[40px]">
            <SmallProductItem
              image={"/images/productimage1.png"}
              name="Classwing"
              price={20}
              type="rect"
              rating={5.0}
            />
            <SmallProductItem
              image={"/images/productimage2.png"}
              name="Classwing"
              price={20}
              type="rect"
              rating={5.0}
            />
            <SmallProductItem
              image={"/images/inamorata.png"}
              name="Classwing"
              price={20}
              type="rect"
              rating={4.5}
            />
            <SmallProductItem
              image={"/images/lightcool.png"}
              name="Classwing"
              price={20}
              type="rect"
              rating={5.0}
            />
          </div>
          <Button2
            name="Shop now"
            bgcolor="bg-secondarygray"
            textColor="text-primarygray"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
