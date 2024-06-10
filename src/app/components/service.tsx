import Image from "next/image";
import { Button2 } from "./button";
const Service = () => {
  return (
    <div className="lg:pt-[60px] pt-[64px] pb-[34.3px] lg:pl-[181px] lg:pr-[211px] px-4 bg-secondarygray border-[1px] border-tertiary flex justify-left lg:gap-[181px] gap-[48px] items-center lg:flex-row flex-col">
      <Image
        className="lg:w-[348px] lg:h-[434.7px] w-[342.93px] h-[428.45px]"
        src={"/images/draw.svg"}
        width={348}
        height={434.7}
        alt="picture"
      ></Image>
      <div className="">
        <p className="lg:text-[28px] text-[24px] font-aillight text-primary mb-4">
          Try Our Service
        </p>
        <p className="lg:text-[56px] text-[40px] font-ivymodeLight text-primarygray mb-4 leading-tight">
          Your skin diagnosis in 3 minutes
        </p>
        <p className="text-[20px] leading-tight mb-8 lg:block hidden">
          Say hello to a more radiant, healthier you with personalized skincare
          that is as unique as you are.
        </p>
        <Button2
          name="Start my diagnosis"
          bgcolor="bg-secondarygray"
          textColor="text-primarygray"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Service;
