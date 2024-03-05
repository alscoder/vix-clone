import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HereForYou = () => {
  return (
    <section className="flex items-center px-5 bg-[#F3EFE5] justify-center">
      <div className="max-w-4xl my-7">
        <h1 className="max-w-xl md:mt-12 md:py-10 text-[34px] md:text-[64px] leading-[76px]">
          We're here for you
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="text-[16px] font-bold py-6">Get answers</h1>
              <p className="text-[16px] leading-[26px]">
                Watch tutorials and read detailed articles in the Wix Help
                Center.
              </p>
              <Link href="#">
                <div className="flex items-center gap-2 font-bold  py-3">
                  <span className="text-[14px]  underline hover:text-hoverBlue">
                    Go to help center
                  </span>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="text-[16px] font-bold py-6">Contact us </h1>
              <p className="text-[16px] leading-[26px]">
                Get support by chat or schedule a call with a Customer Care Expe
              </p>
              <Link href="#">
                <div className="flex items-center gap-2 font-bold  py-3">
                  <span className="text-[14px]  underline hover:text-hoverBlue">
                    Chat with Us
                  </span>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="text-[16px] font-bold py-6">Hire a pro</h1>
              <p className="text-[16px] leading-[26px]">
                Get help at any stage—from site creation to online growth.
              </p>
              <Link href="#">
                <div className="flex items-center gap-2 font-bold  py-3">
                  <span className="text-[14px]  underline hover:text-hoverBlue">
                    Browse All Services
                  </span>
                  <FaArrowRightLong />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HereForYou;
