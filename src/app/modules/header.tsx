"use client";
import Image from "next/image";
import Hero from "./hero";
import { Button3 } from "../components/button";
import { useState } from "react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

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
            {/* <li className="text-[16px] cursor-pointer md:block hidden"> */}
            <NavigationMenu className="bg-transparent">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent uppercase text-white text-[16px] cursor-pointer md:flex hidden">
                    {" "}
                    Pages
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className=" w-[400px] gap-6 p-4 md:w-[348px] grid grid-cols-2 font-ailregular text-[16px] text-boldgreen">
                        <ul className="flex justify-start items-start gap-[24px] flex-col">
                          <li className="cursor-pointer">Home</li>
                          <li className="cursor-pointer">About</li>
                          <li className="cursor-pointer">Shop</li>
                          <li className="cursor-pointer">Product Details</li>
                          <li className="cursor-pointer">Checkout</li>
                          <li className="cursor-pointer">Checkout Paypal</li>
                          <li className="cursor-pointer">Blog</li>
                          <li className="cursor-pointer">Blog Detail</li>
                        </ul>
                        <ul className="flex justify-start items-start gap-[24px] flex-col">
                          <li className="cursor-pointer">Order Confirmation</li>
                          <li className="cursor-pointer">Licenses</li>
                          <li className="cursor-pointer">Changelog</li>
                          <li className="cursor-pointer">Contact Us</li>
                          <li className="cursor-pointer">404</li>
                          <li className="cursor-pointer">401</li>
                          <li className="cursor-pointer">Styleguide</li>
                        </ul>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* </li> */}
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
          className={`flex justify-right items-center bg-secondarygray ${
            navhide === true ? "block" : "block"
          }`}
        >
          <div
            className={`${
              navhide === true
                ? "-top-[1000px] transition-all duration-500 "
                : "top-[0px] transition-all duration-500 "
            } ease-in-out left-0 items-center md:gap-12 gap-4 font-ivymodeLight fixed h-auto z-50 bg-secondarygray w-full`}
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
            <ul className="mt-[20px] text-primarygray flex justify-left flex-col items-left w-full px-[20px] gap-[32px] pb-[120px]">
              <NavigationMenu className="bg-transparent cursor-pointer mr-[20px] w-full relative right-4">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent uppercase text-primarygray text-[32px] cursor-pointer flex">
                      Pages
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>
                        <div className=" w-[400px] gap-6 p-4 md:w-[348px] grid grid-cols-2 font-ailregular text-[16px] text-boldgreen">
                          <ul className="flex justify-start items-start gap-[24px] flex-col">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Shop</li>
                            <li className="cursor-pointer">Product Details</li>
                            <li className="cursor-pointer">Checkout</li>
                            <li className="cursor-pointer">Checkout Paypal</li>
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Blog Detail</li>
                          </ul>
                          <ul className="flex justify-start items-start gap-[24px] flex-col">
                            <li className="cursor-pointer">
                              Order Confirmation
                            </li>
                            <li className="cursor-pointer">Licenses</li>
                            <li className="cursor-pointer">Changelog</li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li className="cursor-pointer">404</li>
                            <li className="cursor-pointer">401</li>
                            <li className="cursor-pointer">Styleguide</li>
                          </ul>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <li className=" text-[32px] cursor-pointer">Shop</li>
              <li className="text-[32px] cursor-pointer">About</li>

              {/* <li className=" text-[32px] cursor-pointer">Login</li> */}
              <li className=" text-[32px] cursor-pointer">Cart (0)</li>
              <li className="w-[32px] h-[32px] md:hidden block"></li>
            </ul>
            <div className="w-[90%] mx-auto pb-80">
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
