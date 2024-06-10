import Image from "next/image";
const Feature = () => {
  return (
    <>
      <section className="max-w-[1440px] mx-auto z-20 relative grid md:grid-cols-2 grid-cols-1 border-b-[1px] border-secondary">
        <div className="lg:pt-[87px] col-span-1 md:pl-[80px] px-[50px] pt-[64px]  relative flex justify-start items-start md:flex-row flex-col md:gap-[61px] gap-[48px] bg-secondarygray">
          <p className="md:text-[56px] text-[40px] font-ivymodeLight leading-tight">
            Inspired by traditional knowledge and nature
          </p>
          <Image
            className="md:absolute -bottom-10 static"
            src={"/images/featureImagepng.png"}
            width={577}
            height={350}
            alt="featureImage"
          />
        </div>
        <div className="col-span-1 flex justify-start items-start flex-col py-[56px] md:py-[96px] md:gap-[56px] gap-[32px] bg-secondary md:pl-[56px] md:pr-[70px] px-[16px]">
          <div className="flex justify-center items-start md:flex-row flex-col gap-[10.5px]">
            <Image
              className=""
              src={"logos/Organic.svg"}
              width={74}
              height={74}
              alt="organic"
            />
            <div className="flex justify-start items-start flex-col font-aillight">
              <p className="font-[28px] pb-2 leading-tight">100% Organic</p>
              <p>
                We craft skincare using the most exquisite ingredients from the
                plant, earth and mineral realms.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start  md:flex-row flex-col gap-[10.5px]">
            <Image
              className=""
              src={"logos/Organic.svg"}
              width={74}
              height={74}
              alt="organic"
            />
            <div className="flex justify-start items-start flex-col font-aillight">
              <p className="font-[28px] pb-2 leading-tight">Fits your skin</p>
              <p>
                I’ts all natural and processed based on traditional knowledge
                with modern technology.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start  md:flex-row flex-col gap-[10.5px]">
            <Image
              className=""
              src={"logos/Organic.svg"}
              width={74}
              height={74}
              alt="organic"
            />
            <div className="flex justify-start items-start flex-col font-aillight">
              <p className="font-[28px] pb-2 leading-tight">Easy to use</p>
              <p>
                Packed with a unique design as well as usefull that can help you
                perform routine skin care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-w-[313.95px] lg:px-[313.95px] px-[16px] mx-auto text-center lg:pt-[96px] pt-[64px] lg:pb-[56px] pb-[48px] leading-tight border-b-[1px] border-secondary bg-secondarygray">
        <p className="lg:text-[28px] text-[24px] font-aillight text-primary mb-4">
          Our featured products
        </p>
        <p className="lg:text-[56px] text-[40px] font-ivymodeLight">
          Facial and skincare, natural and certified organic
        </p>
      </section>
    </>
  );
};

export default Feature;
