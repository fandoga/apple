import { appleImg, bagImg, searchImg } from "@/utils";
import { navLists } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image src={appleImg} alt="Apple Img" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="cursor-pointer px-5 text-sm text-gray hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <Image src={searchImg} alt="search" width={18} height={18} />
          <Image src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
