import Image from "next/image";
import { Button2 } from "../components/button";

const TryOutSection = () => {
  return (
    <section className="max-w-[1440px] mx-auto bg-secondarygray lg:py-[96px] py-[64px] lg:px-20 px-4 flex lg:justify-between justify-center items-center md:flex-row flex-col lg:gap-[92px] gap-[48px]">
      <div className="flex justify-center items-center flex-col text-primarygray w-[303.33px]">
        <Image
          src={"/logos/Happy Skin.svg"}
          width={74}
          height={74}
          alt="happy skin"
          className="mb-[32px]"
        ></Image>
        <p className="text-primary font-aillight text-[20px]">
          Loyalty Program
        </p>
        <p className="mb-4 text-[30px] font-ivymodeLight">For Happy Skin</p>
        <Button2
          name="Join the program"
          bgcolor="bg-secondarygray"
          textColor="text-primarygray"
          onClick={() => {}}
        />
      </div>
      <div className="md:h-[88px] md:w-[1px] w-[88px] h-[1px] bg-tertiary"></div>
      <div className="flex justify-center items-center flex-col text-primarygray w-[303.33px]">
        <Image
          src={"/logos/feedback.svg"}
          width={74}
          height={74}
          alt="happy skin"
          className="mb-[32px]"
        ></Image>
        <p className="text-primary font-aillight text-[20px]">
          Organic beauty is shared,
        </p>
        <p className="mb-4 text-[29px] font-ivymodeLight leading-tight">
          Sponsor those you love!
        </p>
        <Button2
          name="Refer a Friend"
          bgcolor="bg-secondarygray"
          textColor="text-primarygray"
          onClick={() => {}}
        />
      </div>
      <div className="md:h-[88px] md:w-[1px] w-[88px] h-[1px] bg-tertiary"></div>
      <div className="flex justify-center items-center flex-col text-primarygray w-[303.33px]">
        <Image
          src={"/logos/beauty-treatment.svg"}
          width={74}
          height={74}
          alt="happy skin"
          className="mb-[32px]"
        ></Image>
        <p className="text-primary font-aillight text-[20px]">
          Treat yourself to good weather
        </p>
        <p className="mb-4 text-[30px] font-ivymodeLight">
          at Maison Absolution
        </p>
        <Button2
          name="Try Our Treatments"
          bgcolor="bg-secondarygray"
          textColor="text-primarygray"
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default TryOutSection;
