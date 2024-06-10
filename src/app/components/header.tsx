import Image from "next/image";
import Hero from "./hero";

const Header = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto">
      <header className="max-w-[1440px] mx-auto md:px-20 md:py-5 px-[14.4px] py-4 z-50 h-auto absolute top-0 left-0 w-full">
        <nav className="flex justify-between items-center">
          <Image
            className="cursor-pointer md:w-[140px] md:h-[44px] w-[114px] h-[36px]"
            src="/logos/Logo.svg"
            alt="logo"
            width={140}
            height={44}
          />
          <ul className="flex justify-center items-center md:gap-12 gap-4 font-ailregular uppercase">
            <li className="text-white text-[16px] cursor-pointer md:block hidden">
              <span>Pages</span>
              <Image
                className="inline-block align-center ml-[8px]"
                src={"/logos/arrow-down.png"}
                alt="arrow-down"
                width={20}
                height={20}
              />
            </li>
            <li className="text-white text-[16px] cursor-pointer">Shop</li>
            <li className="text-white cursor-pointer md:block hidden">About</li>
            <li className="md:block hidden"></li>
            <li className="text-white text-[16px] cursor-pointer md:block hidden">
              Login
            </li>
            <li className="text-white text-[16px] cursor-pointer">Cart (0)</li>
            <li className="w-[32px] h-[32px] md:hidden block">
              <Image
                src={"/logos/Humburgermenu.png"}
                width={32}
                height={32}
                alt="hamburger menu"
              ></Image>
            </li>
          </ul>
        </nav>
      </header>
      <Hero />
    </section>
  );
};

export default Header;
