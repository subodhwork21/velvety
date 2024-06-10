import Image from "next/image";
const SmallProductItem = ({
  image,
  name,
  price,
  type,
  rating,
}: {
  image: string;
  name: string;
  price: number;
  type: string;
  rating: number;
}) => {
  return (
    <div className="flex justify-center items-start flex-col gap-6 w-full border-[1px] border-secondary">
      <div
        className={`bg-secondary ${type == "rect" ? "" : "rounded-[110%]"} `}
      >
        <Image
          className="lg:w-[305px] lg:h-[320px] w-[343px] h-[320px]"
          src={image}
          alt="productimage"
          width={305}
          height={320}
        ></Image>
      </div>

      <div className="flex justify-start flex-col items-start w-full">
        <div>
          <p className="font-aillight lg:text-[28px] text-[20px]">{name}</p>
          <p className="font-ailbold lg:text-[22px] text-[20px]">${price}</p>
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
          <p className="text-[22px] font-aillight ml-[12.8px]">
            {Number.isInteger(rating) ? rating + ".0" : rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallProductItem;
