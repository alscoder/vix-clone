import Link from "next/link";
import React from "react";

const Manage = () => {
  return (
    <section className="flex items-center justify-center pt-20 md:py-28  ">
      <div className="max-w-6xl pt-[200px]  ">
        <div className="w-full  ">
          <div className="w-full md:grid grid-cols-[40%_60%]">
            <div className="relative hidden md:flex ">
              <img src="screen.png" alt="" className="w-full  pt-[20px]" />
              <img
                src="top-1.png"
                alt=""
                className="absolute rounded-2xl w-[260px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className=" px-[40px]  md:pt-[200px] flex-col justify-items-end items-center">
              <span className="md:text-[60px]  text-[30px] md:leading-[79px] leading-[55px]">
                Manage your business like a pro
              </span>
              <div className="max-w-md">
              <h1 className=" text-[17px] pt-5">
                Capture leads, get reports and insights, automate your business,
                and more from desktop or on the go from your phone with the <Link href="#" className="underline">Wix
                Owner app.</Link>
              </h1>
              <h1 className="text-[17px] pt-5">
                Everything is synced for seamless management experience.
              </h1>
              </div>
              <button className="text-white bg-black border font-medium py-2 px-4 rounded-full my-6 hover:bg-hoverBlue">
                <span className="flex items-center justify-center">
                  <span className="px-2 text-[18px] font-[400px] leading-normal ">
                    Get Started
                  </span>
                </span>
              </button>
            </div>
            <div className="relative flex md:hidden ">
              <img src="screen.png" alt="" className="  pt-[20px]" />
              <img
                src="top-1.png"
                alt=""
                className="absolute rounded-2xl w-[260px]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manage;
