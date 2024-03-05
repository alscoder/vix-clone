import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-[#fff]  absolute w-full h-28 border-b-[1px]">
      <div className=" max-w-screen-xl h-full mx-auto px-4 flex items-center font-medium justify-between">
        <div className=" flex items-center font-medium  justify-between">
          <h2 className="mr-10 text-[28px] font-bold">WIX</h2>
          <ul className="md:flex hidden items-center gap-8 ">
            <NavLinks />
          </ul>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
