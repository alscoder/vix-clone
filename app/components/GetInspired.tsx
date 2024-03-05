import React from "react";

const GetInspired = () => {
  return (
    <div className="w-full h-screen bg-black   [#b491e8] text-white mb-10">
      <div className="w-full h-full  grid md:grid-cols-[40%_60%]">
        <div className="bg-black py-10 md:pt-[200px] border-r-2 border-white px-[40px] flex-col justify-items-end items-center">
          <span className="md:text-[50px]   text-[30px] md:leading-[59px] leading-[45px]">
            Get inspired, gain new skills and see what’s trending
          </span>
          <button className="text-black mt-10 bg-white border font-medium py-2 px-4 rounded-full my-6">
            <span className="flex items-center justify-center">
              <span className="px-2 text-[24px] font-[400px] leading-normal">
                Explore the blog
              </span>
            </span>
          </button>
        </div>
        <div className="bg-black px-[40px] py-10 md:py-24 flex-col justify-items-end items-center">
          <div className="grid md:grid-cols-1 gap-2 bg-black  lg:gap-8 sm:gap-4  lg:grid-cols-2 space-y-3">
            <div className="max-w-xs p-4 h-56 bg-white text-black rounded-xl ">
              <img src="f11-img1.webp" alt="" className="rounded-xl items-center justify-center" />
              <p className="text-[16px]  pl-3 font-bold py-3">
                  How to design a website in 2024
                </p>
            </div>
            <div className="p-2 h-56 bg-white text-black rounded-xl max-w-xs">
                <img src="f11-img2.png" alt="" className="rounded-xl" />
                <p className="text-[16px] pl-3  font-bold py-3">
                  Online courses to get you started
                </p>
            </div>
            <div className="p-2 h-56 bg-white text-black rounded-xl max-w-xs">
                <img src="f11-img3.png" alt="" className="rounded-xl" />
                <p className="text-[16px] pl-3 font-bold py-3">13 ways to monetize your website</p>
            </div>
            <div className="p-2 h-56 bg-white text-black rounded-xl max-w-xs">
                <img src="f11-img4.png" alt=""  className="rounded-xl" />
                <p className="text-[16px] pl-3 font-bold py-3">13 wix websites to inspire you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInspired;
