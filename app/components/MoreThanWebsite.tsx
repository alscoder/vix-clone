import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MoreThanWebsite = () => {
  return (
    <div>
      {/* On Desktop view */}
      <div className="max-w-3xl hidden md:flex mx-auto items-center justify-around py-16 gap-10 ">
        <div className="max-w-lg font-normal py-10 text-[54px] leading-[60px]">
          Build more than a website
        </div>
        <div className="max-w-xs ">
          <span className="text-[12px]">
            From selling online, starting a blog and organizing events to
            promoting your business and building your community, create a
            website that can grow with you.
          </span>
          <div className="flex mt-10 items-center gap-2  hover:text-hoverBlue">
            <span className="text-[16px]  underline border-black">
              Get started
            </span>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      {/* On mobile view */}
      <div className="max-w-3xl flex-col md:hidden mx-auto items-center justify-around px-3 py-16 gap-10 ">
        <div className="max-w-[300px] font-normal  text-[40px] mb-4">
          Build more than a website
        </div>
        <div className="max-w-xs ">
          <span className="text-[18px] ">
            From selling online, starting a blog and organizing events to
            promoting your business and building your community, create a
            website that can grow with you.
          </span>
          <div className="flex  items-center gap-2 mt-4 hover:text-hoverBlue">
            <span className="text-[18px]  underline border-black">
              Get started
            </span>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreThanWebsite;
