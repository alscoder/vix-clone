import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

const Button = () => {
  return (
    <div className="inline-flex gap-4  items-center">
      <TfiWorld className="text-md hidden md:flex" />
      <Link href="/" className="text-[14px] hidden md:flex underline border-l-2 border-black px-4">
        Log In
      </Link>
      <button
        className="text-white bg-blue hover:bg-blue-800
           focus:ring-4 focus:ring-blue-300 font-medium 
           rounded-full text-[14px] px-5 py-2.5 me-2 mb-2"
      >
        Get Started
      </button>
      <FiMenu className="flex text-[24px] font-bold md:hidden" />
    </div>
  );
};

export default Button;
