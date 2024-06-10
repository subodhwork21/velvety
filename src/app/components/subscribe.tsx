import Image from "next/image";

const Subscribe = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-20 py-10 bg-primary flex justify-center items-center lg:flex-row flex-col lg:gap-[80px] gap-[48px]">
      <p className="lg:text-[56px] text-[40px] font-ivymodeLight md:w-[691px] w-[343px] sm:w-[500px] text-white leading-tight">
        Subscribe to get 10% off your first order
      </p>
      <div className="flex justify-center items-center md:w-auto">
        <input
          type="text"
          placeholder="Drop your email here"
          className="text-primary px-6 py-4 md:w-[450px] w-[250px] font-ailregular"
        />
        <div className="bg-white md:py-[14px] py-[12px] px-2 border-l-[1px] border-tertiary w-[87px]">
          <Image
            src={"/logos/arrowright.png"}
            width={47.87}
            height={29.13}
            alt="arrowright"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
