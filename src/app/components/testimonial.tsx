import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="max-w-[1440px] mx-auto lg:pt-[46px] pt-[64px] lg:pb-[46px] pb-[64px] lg:px-20 px-4 bg-secondarygray flex justify-start items-center lg:flex-row flex-col lg:gap-[113px] gap-[48px] border-b-[1px] border-tertiary">
      <div className="bg-secondary rounded-[120%] w-[373px]">
        <Image
          className="lg:w-"
          src={"/images/productimage3.png"}
          width={373}
          height={585}
          alt="productimage"
        ></Image>
      </div>
      <div className="flex flex-col justify-start items-start lg:w-[794px]">
        <p className="lg:text-[28px] text-[24px] font-aillight text-primary lg:mb-[80px] mb-[32px]">
          Product Testimonials
        </p>

        <div className="flex justify-center items-center gap-[17.04px] mb-[32px]">
          <Image
            src={"/logos/star.svg"}
            width={38}
            height={38}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={38}
            height={38}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={38}
            height={38}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={38}
            height={38}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={38}
            height={38}
            alt="star"
          ></Image>
        </div>
        <p className="lg:text-[40px] text-[32px] text-primarygray mb-[32px]">
          “I’ve been feeling pretty stressed with my skin lately, so I picked up
          a set of HOLOCENA skincare. Oh my goodness!. It was AMAZING. My skin
          felt so soft and moisturized”
        </p>
        <p className="font-aillightitalic italic text-[20px] text-primary">
          - Customer Review
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
