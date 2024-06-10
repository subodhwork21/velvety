import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <section className="md:px-20 px-[16px] flex  text-start justify-start bg-secondarygray">
        <div className="border-b-[1px] border-secondary grid md:grid-cols-2 grid-cols-1 md:py-[96px] py-[64px] md:gap-[26px] gap-[32px]">
          <div className="md:gap-4 gap-[26px] text-[24px] md:text-[28px] font-aillight">
            <p className="text-primary">About us</p>
            <p className="font-ivymodeLight text-primarygray md:text-[56px] text-[40px] leading-tight">
              Velvety facial and skincare company
            </p>
          </div>
          <div className="text-[20px] font-aillight text-primary">
            <p>
              Velvety is an indigenous company that specializes in the
              manufacture and development of facial and skincare products using
              the medicinal properties of the traditional First Nations
              pharmacopoeia, with a concern for sustainable development.
            </p>
            <p className="mt-8">
              The products offered, whose benefits have been scientifically
              confirmed, are 100% natural and allow you to take care of your
              body and mind: calming teas, energizing infusions,
              anti-inflammatory essential oils, anti-age soaps and creams, etc.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:py-[96px] py-[64px] lg:px-20 px-6 bg-secondarygray">
        <div>
          <p className="pb-10 lg:text-[28px] text-[24px] text-primary">
            As Seen in
          </p>
          <div className="flex justify-between items-center flex-wrap lg:flex-none lg:gap-0 gap-[24px] gap-y-[42px]">
            <Image
              className="w-[136.18px] h-[35px] lg:w-[218px] lg:h-[56px]"
              width={218}
              height={56}
              src={"logos/vogue.svg"}
              alt="vogue"
            ></Image>
            <Image
              className="w-[150px] h-[37px] lg:w-[235px] lg:h-[58px]"
              width={235}
              height={58}
              src={"logos/forbes.svg"}
              alt="vogue"
            ></Image>
            <Image
              className="w-[141.56px] h-[79px] lg:w-[179px] lg:h-[100px]"
              width={179}
              height={100}
              src={"logos/thoughtcatalog.svg"}
              alt="vogue"
            ></Image>
            <Image
              className="w-[170.44px] h-[35px] lg:w-[272px] lg:h-[56px]"
              width={272}
              height={56}
              src={"logos/womenhealth.svg"}
              alt="vogue"
            ></Image>
            <Image
              className="w-[146.48px] h-[67px] lg:w-[192px] lg:h-[88px]"
              width={192}
              height={88}
              src={"logos/wwd.svg"}
              alt="vogue"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
