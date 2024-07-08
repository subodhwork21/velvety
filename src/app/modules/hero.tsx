"use client";
import Image from "next/image";
import { Button1 } from "../components/button";
const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative md:h-[730px] h-[833px] z-[10]">
      <div className="relative w-full grid grid-cols-2 max-w-[1440px] z-50">
        <div className="bg-primary md:block hidden col-span-1"></div>
        {/* <div className="h-[716px]"> */}
        <Image
          className="object-cover md:h-[735px] h-[120vh] w-full md:col-span-1 col-span-2"
          src={"/images/bghero.png"}
          width={730}
          height={733}
          alt="bghero"
        ></Image>
        {/* </div> */}
      </div>
      <div className="absolute top-0 pt-10 left-0 flex justify-center md:flex-row flex-col-reverse z-50 lg:pl-[117px] md:pl-[30px] pl-[16px] w-full items-center lg:gap-20 md:gap-10 gap-0 md:mt-0 mt-[44px] lg:pr-[90px] md:pr-[20px] pr-[16px]">
        <Image
          className="object-cover md:w-[332px] md:h-[760px] w-[168px] h-[395px] z-[100] relative"
          src={"/images/Hero Image.png"}
          alt="heroimage"
          width={332}
          height={780}
        ></Image>
        <div className="font-ivymodeLight flex justify-start md:items-start items-start gap-5 flex-col w-full md:max-w-full md:px-0 md:py-0 py-7">
          <h1 className="text-white xl:text-[90px] max-w-[100%] lg:text-[70px] md:text-[60px] text-[48px] md:mb-16 leading-tight md:text-left text-center drop-shadow-lg ">
            Let nature take care of your body and soul
          </h1>
          <div className="flex justify-center items-center w-full md:w-auto">
            <Button1
              name="Shop Now"
              bgcolor="#F45F5F"
              textColor="#FFFFFF"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
