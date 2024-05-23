"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useScroll } from "../app/context/scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useMenu } from "../app/context/menuContext";
export default function MobileNav() {
  const {
    scrollToSection,
    shopRef,
    homeRef,
    productRef,
    contactRef,
  } = useScroll()

  const { handleOpenMenu ,openMenu } = useMenu();
  const [aniLeft, setAniLeft] = useState(false);
  const handleCloseMenu = (section) => {
    if (section) {
      scrollToSection(section);
    }
    setAniLeft(true);
    setTimeout(() => {
      handleOpenMenu();
    }, 1000);
  };
  const segment = useSelectedLayoutSegment();
  return (
    <>
    { openMenu &&
    <nav
      className={`lg:hidden top-0 z-[1000] menu fixed bottom-0 w-[80%]   h-full`}>
        <p className="text-white absolute top-6 left-4 text-xl font-bold text-center pt-4">  SHOPPYSTORE</p>
        <ul className="flex flex-col gap-8 justify-center items-start w-fit mx-auto    ">
          <li
            onClick={() => handleCloseMenu(homeRef)}
            className={`text-white text-3xl font-bold cursor-pointer
             text-start  bottom-0 overflow-hidden relative mb-2 
              ${aniLeft ? "left-[]" : "left-0"}
            `}
          >
           <span className=" menuli">Home</span>
          </li>
          <li
            onClick={() => handleCloseMenu(shopRef)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Shop</span>
          </li>
          <li
          onClick={() => handleCloseMenu(productRef)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >Products</li>
          <li
          onClick={() => handleCloseMenu(contactRef)}
            className={`text-white text-3xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >Contact</li>
        </ul>
    
    </nav>
    }
    </>
  );
}
