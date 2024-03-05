import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const buttons = [
    { label: "Online Store", color: "bg-red-500" },
    { label: "Portfolio", color: "bg-green-500" },
    { label: "Blog", color: "bg-blue-500" },
    { label: "Consultant", color: "bg-yellow-500" },
    { label: "Service Business", color: "bg-purple-500" },
    { label: "Restaurant", color: "bg-pink-500" },
    { label: "Event", color: "bg-pink-500" },
    { label: "Other", color: "bg-pink-500" },
  ];
  return (
    <div className="bg-blue  w-full text-white pb-20">
      <div className=" pt-40 hidden md:flex items-center justify-center ">
        <div className="max-w-4xl text-center">
          <p className="md:text-[90px] text-[40px] font-bold md:leading-[99px] leading-[65px]">
            Create a website without limits
          </p>
          <div>
            <p className="text-[24px] font-medium leading-[36px] py-3">
              What kind of website would you like to create?
            </p>
            <div className="max-w-2xl p-4 mx-auto  items-center ">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="text-white  border font-medium py-2 px-4 rounded-xl m-2"
                >
                  <span className="flex items-center justify-center">
                    <IoStorefrontOutline />
                    <span className="px-2">{button.label}</span>
                  </span>
                </button>
              ))}
            </div>
            <button className="text-black bg-white border font-medium py-2 px-4 rounded-full m-2">
              <span className="flex items-center justify-center">
                <span className="px-2 text-[24px] font-[400px] leading-normal">
                  Get Started
                </span>
              </span>
            </button>
            <p className="text-[14px] font-[400px] leading-[21px] py-3">
              Trusted by 250M + users worldwide.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex max-w-6xl pt-10  items-center justify-center mx-4 gap-10 ">
        <div className="border rounded-2xl p-3 mt-auto bg-white bg-opacity-40">
          <div className="min-w-28">
            <span className="text-[10px] font-extralight">Sales</span>
            <br />
            <span className="flex text-[20px] font-bold">
              $212K <FaChevronUp />{" "}
            </span>
          </div>
        </div>
        <div className="max-w-4xl border  relative rounded-2xl p-3 bg-white bg-opacity-40">
          <img
            src="/hero.png"
            alt=""
            className="border rounded-2xl w-fit  "
          />
          <div className="absolute text-blue inset-0 grid p-7">
            <div className="z-20  font-[400px] text-[12px] ">
              <div className="hidden md:flex justify-between ">
                <div className="font-extrabold text-[25px] pl-3">Ciao</div>
                <div className="flex  justify-between items-center gap-4">
                  <span className="text-[10px]">About</span>
                  <span className="text-[10px]">Shop</span>
                  <span className="text-[10px]">Blog</span>
                  <CiSearch className="text-[10px]" />
                  <IoPersonOutline className="text-[10px]" />
                  <SlBag className="text-[10px]" />
                </div>
              </div>
              <div className="max-w-[300px] font-mono pl-3 pt-10 ">
                <p className="text-[55px] leading-10  pb-6">Sparkling</p>
                <p className="text-[50px] mb-5 leading-10 ">Fruit Soda</p>
                <button className="border text-[13px] leading-5 border-blue p-1">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" border rounded-2xl p-3 mt-auto  bg-white bg-opacity-40">
          <img src="/small-can.png" alt="" className="border rounded-2xl" />
          <div className="mt-1">
            <span className="text-[10px]">Prebiotic Soda</span>
            <br />
            <span className="text-[10px] font-extralight">
              Ginger Lemon Fresh Drink
            </span>
            <br />
            <br />
            <span>$5.99</span>
          </div>
          <div className="mt-1 flex justify-between items-center ">
            <span className="text-[10px] font-extralight  border-b-2 border-white">
              Quantity - 1 +
            </span>
            <button className="text-[10px] text-blue bg-orange-500 font-bold p-1 ">
              Add to chart
            </button>
          </div>
        </div>
      </div>
      <div className=" pt-40 flex md:hidden items-center justify-center px-4 ">
        <div className="max-w-4xl text-center">
          <p className=" text-[40px]   leading-[65px]">
            Create a website without limits
          </p>
          <p className=" text-[18px]">
            Build and scale with confidence. From a powerful website builder to
            advanced business solutions—we've got you covered.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input mt-10   py-3 px-16 bg-transparent border shadow-lg rounded-full text-gray-700 focus:border-blue-500"
          />
          <button className="flex mx-auto mt-3 border rounded-full bg-white text-black items-center py-3 px-24 gap-2  hover:text-hoverBlue">
            <span className="text-[18px] ">Get started</span>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="flex md:hidden pt-10  items-center justify-center mx-10 gap-2 ">
        <div className="border rounded-2xl p-3 mt-auto bg-white bg-opacity-40"></div>
        <div className="max-w-4xl border  relative rounded-2xl p-3 bg-white bg-opacity-40">
          <img
            src="/hero-mob.jpg"
            alt=""
            className="flex border rounded-2xl w-fit  "
          />
          <div className="absolute text-blue inset-0 grid p-7">
            <div className="z-20  font-[400px] text-[12px] ">
              <div className="flex justify-between items-center ">
                <div className="font-extrabold text-[18px] pl-2">Ciao</div>
                <div className="items-center">
                  <HiOutlineMenuAlt4 />
                </div>
              </div>
              <div className="max-w-[300px] pt-3 font-mono pl-3  ">
                <p className="text-[18px] leading-8">Sparkling Fruit Soda</p>
                <div className="flex gap-2 items-center">
                  <button className=" text-[13px] leading-5  p-1">
                    Shop Now
                  </button>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-2xl p-3 mt-auto bg-white bg-opacity-40"></div>
      </div>
    </div>
  );
};

export default Hero;
