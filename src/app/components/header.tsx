"use client";
import Image from "next/image";
import Hero from "./hero";
import { Button3 } from "./button";
import { useState } from "react";

const Header = () => {
  const [navhide, setNavHide] = useState(true);
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
            <li
              className="w-[32px] h-[32px] md:hidden block"
              onClick={() => setNavHide(false)}
            >
              <Image
                src={"/logos/Humburgermenu.png"}
                width={32}
                height={32}
                alt="hamburger menu"
              ></Image>
            </li>
          </ul>
        </nav>
        <nav
          className={`flex justify-right items-center ${
            navhide === true ? "block" : "block"
          }`}
        >
          <div
            className={`${
              navhide === true
                ? "-top-[1000px] transition-all duration-500"
                : "top-[0px] transition-all duration-500"
            } ease-in-out left-0 items-center md:gap-12 gap-4 font-ivymodeLight fixed h-screen z-50 bg-secondarygray w-full`}
          >
            <div className="py-4 px-4 flex justify-between items-center border-b-[1px] border-tertiary">
              <Image
                className="cursor-pointer md:w-[140px] md:h-[44px] w-[114px] h-[36px] relative z-50"
                src="/logos/logogreen.svg"
                alt="logo"
                width={112}
                height={36}
              />
              <div className="flex justify-center items-center gap-4">
                <p className="text-primary text-[16px] cursor-pointer">Shop</p>
                <p className="text-primary text-[16px] cursor-pointer">
                  Cart (0)
                </p>
                <Image
                  onClick={() => {
                    setNavHide(true);
                  }}
                  src={"/logos/close.svg"}
                  width={32}
                  height={32}
                  alt="hamburger menu"
                ></Image>
              </div>
            </div>
            <ul className="mt-[20px] text-primarygray flex justify-left flex-col items-left w-full px-[20px] gap-[32px] pb-[230px]">
              <li className=" text-[16px] cursor-pointer w-full flex justify-between items-center">
                <span className="text-[32px]">Pages</span>
                <Image
                  className="inline-block align-center ml-[8px] invert"
                  src={"/logos/arrow-down.png"}
                  alt="arrow-down"
                  width={36}
                  height={36}
                />
              </li>
              <li className=" text-[32px] cursor-pointer">Shop</li>
              <li className="text-[32px] cursor-pointer">About</li>

              {/* <li className=" text-[32px] cursor-pointer">Login</li> */}
              <li className=" text-[32px] cursor-pointer">Cart (0)</li>
              <li className="w-[32px] h-[32px] md:hidden block"></li>
            </ul>
            <div className="w-[90%] mx-auto">
              <Button3
                name="Login"
                bgcolor="bg-secondarygray"
                textColor="text-primarygray"
                onClick={() => {}}
              />
            </div>
          </div>
        </nav>
      </header>
      <Hero />
    </section>
  );
};

export default Header;
