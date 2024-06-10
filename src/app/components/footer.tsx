import Image from "next/image";
const Footer = () => {
  return (
    <section className="bg-secondarygray">
      <div className="flex justify-center lg:items-start items-center lg:flex-row flex-col border-b-[1px] border-tertiary">
        <div className="px-[37px] pt-[64px] pb-[42px] flex flex-col justify-center items-center lg:border-r-[1px] border-b-[1px] border-tertiary">
          <Image
            src={"/logos/logo_black.svg"}
            width={174.37}
            height={54.67}
            alt="logo"
          ></Image>
          <div className="w-[249px] text-center lg:mt-[52px] mt-[32px] lg:mb-[134px] mb-[64px]">
            <p className="text-[20px] font-ailregular text-primary">
              Opening hours
            </p>
            <p className="text-boldgreen text-[22px]">
              Monday to Saturday: 10:30 a.m. to 7 p.m.
            </p>
          </div>
          <div className="flex justify-center items-center gap-[21.75px]">
            <Image
              src={"/logos/insta.svg"}
              width={32}
              height={32}
              alt="instagram"
            ></Image>
            <Image
              src={"/logos/twitter.png"}
              width={32}
              height={32}
              alt="instagram"
            ></Image>
            <Image
              src={"/logos/facebook.png"}
              width={32}
              height={32}
              alt="instagram"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center px-[98.5px] lg:pt-[56px] pt-[32px] lg:pb-[101px] pb-[32px] text-primarygray font-ailregular text-[20px] lg:border-r-[1px] border-b-[1px] border-tertiary">
          <p className="text-[28px] font-aillight text-primary mb-[24px]">
            Shop
          </p>
          <p className="mb-[14px]">Skincare</p>
          <p className="mb-[14px]">Facial</p>
          <p className="mb-[14px]">Soap</p>
          <p className="mb-[14px]">Candles</p>
          <p className="mb-[14px]">Auto Fragrances</p>
          <p className="mb-[14px]">Gifts</p>
        </div>
        <div className="flex flex-col justify-start items-center px-[98.5px] lg:pt-[56px] pt-[32px] lg:pb-[101px] pb-[32px] text-primarygray font-ailregular text-[20px] lg:border-r-[1px] border-b-[1px] border-tertiary">
          <p className="text-[28px] font-aillight text-primary mb-[24px]">
            Help Desk
          </p>
          <p className="mb-[14px]">Chat</p>
          <p className="mb-[14px]">FAQ</p>
          <p className="mb-[14px]">Shipping & Returns</p>
          <p className="mb-[14px]">Contact</p>
          <p className="mb-[14px]">Policies</p>
          <p className="mb-[14px]">Accessibility</p>
          <p className="mb-[14px]">My Account</p>
        </div>
        <div className="flex flex-col justify-start items-center px-[98.5px] lg:pt-[56px] pt-[32px] lg:pb-[101px] pb-[32px] text-primarygray font-ailregular text-[20px] lg:border-r-[1px] border-b-[1px] border-tertiary">
          <p className="text-[28px] font-aillight text-primary mb-[24px]">
            Stores
          </p>
          <p className="mb-[14px]">Manhattan</p>
          <p className="mb-[14px]">Brooklyn</p>
          <p className="mb-[14px]">Tokyo</p>
          <p className="mb-[14px]">Jakarta</p>
          <p className="mb-[14px]">Paris</p>
          <p className="mb-[14px]">Buenos Aires</p>
        </div>
        <div className="flex justify-center items-center lg:gap-[105px] gap-[35px] lg:flex-col flex-row lg:h-[500px] h-[81px] text-[12px] lg:w-[40px] w-[202px] font-ailregular text-primarygray">
          <p className="lg:rotate-90 w-[77px] text-[12px]">SITE CREDITS</p>
          <p className="lg:rotate-90 w-[90px] text-[12px]">©2023 VELVETY</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-[32px] lg:gap-[0px] lg:flex-row flex-col lg:px-[80px] px-[16px] lg:py-[20px] py-[32px]">
        <p className="text-[18px]">
          © Designed by <span>DhuhaCreative.</span> Powered by <span>UI8.</span>
        </p>
        <div className="text-[18px] font-ailregular flex justify-between items-center gap-[40px] text-primarygray">
          <p>Licenses</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
