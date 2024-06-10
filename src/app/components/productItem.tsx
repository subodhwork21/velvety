import Image from "next/image";
const ProductItem = ({
  image,
  price,
  name,
  type,
}: {
  image: string;
  price: number;
  name: string;
  type: string;
}) => {
  return (
    <div className="py-8 flex justify-center items-center flex-col gap-6 w-full border-[1px] border-secondary">
      <div className={`bg-secondary ${type == "rect" ? "" : "rounded-[110%]"}`}>
        <Image
          className="lg:w-[416px] lg:h-[528px] w-[335px] h-[314px]"
          src={image}
          alt="productimage"
          width={416}
          height={528}
        ></Image>
      </div>

      <div className="flex justify-between lg:flex-row flex-col w-[335px] lg:items-end items-start lg:w-full lg:px-8 px-0">
        <div>
          <p className="font-aillight lg:text-[28px] text-[24px] uppercase">
            {name}
          </p>
          <p className="font-ailbold text-[22px]">${price}</p>
        </div>
        <div className="flex justify-center items-center gap-[4.8px]">
          <Image
            src={"/logos/star.svg"}
            width={20}
            height={24}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={20}
            height={24}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={20}
            height={24}
            alt="star"
          ></Image>
          <Image
            src={"/logos/star.svg"}
            width={20}
            height={24}
            alt="star"
          ></Image>
          <Image
            src={"/logos/whitestar.svg"}
            width={20}
            height={24}
            alt="star"
          ></Image>
          <p className="text-[22px] font-aillight ml-[12.8px]">4.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
