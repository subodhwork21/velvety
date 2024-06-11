import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  bgcolor: string;
  textColor: string;
  onClick: () => void;
}
const Button1 = ({ name, bgcolor, textColor, onClick }: Props) => {
  return (
    <div>
      <button
        className={`bg-white text-black font-ivymodeLight text-[16px] md:text-[22px] md:px-[60px] md:py-[10px] px-[30px] py-[8px]`}
      >
        {name}
        <span>
          <Image
            className="inline-block align-center ml-4"
            src={"/logos/arrowright.png"}
            width={30}
            height={18}
            alt="arrowright"
          ></Image>
        </span>
      </button>
    </div>
  );
};
const Button2 = ({ name, bgcolor, textColor, onClick }: Props) => {
  return (
    <div>
      <button
        className={`${bgcolor} ${textColor} border-[1px] border-primary font-ailregular text-[16px] md:text-[16px] md:px-[25px] md:py-[10px] px-[25px] py-[12px]`}
      >
        {name}
        <span>
          <Image
            className="inline-block align-center ml-4"
            src={"/logos/arrowright.png"}
            width={30}
            height={18}
            alt="arrowright"
          ></Image>
        </span>
      </button>
    </div>
  );
};
const Button3 = ({ name, bgcolor, textColor, onClick }: Props) => {
  return (
    <div>
      <button
        className={`${bgcolor} ${textColor} border-[1px] border-primary font-ailregular text-[16px] md:text-[16px] w-[100%] h-[52px]`}
      >
        {name}
      </button>
    </div>
  );
};
export { Button1, Button2, Button3 };
