import React from "react";

const Traffic = () => {
  return (
    <div className="w-full h-screen md:my-12 [#b491e8] text-black md:text-white  mb-10">
      <div className="w-full h-full grid lg:grid-cols-[35%_65%]">
        <div className="bg-[#b491e8] md:bg-black pt-10 md:pt-[200px] px-[40px] flex-col justify-items-end items-center">
          <span className="md:text-[50px]    text-[40px] md:leading-[59px] leading-[65px]">
            Drive traffic that converts
          </span>
          <p className="text-[18px] md:text-xl pt-5">
            Promote your business and reach the right audience:
          </p>
          <div className="mt-[20px]">
            <h1 className=" text-xl pt-3">- Complete SEO solution</h1>
            <h1 className=" text-xl pt-3">- AI-driven FB & IG Ads</h1>
            <h1 className=" text-xl pt-3">- Email campaigns </h1>
            <h1 className=" text-xl pt-3">- Social posts and more</h1>
          </div>
          <button className=" mt-10 bg-black md:bg-white text-white md:text-black border font-medium py-2 px-4 rounded-full my-6 hover:bg-slate-800">
            <span className="flex items-center justify-center">
              <span className="px-2 text-[18px] font-[400px] leading-normal">
                Get Started
              </span>
            </span>
          </button>
        </div>
        <div className="bg-[#b491e8] ">
          <img src="traffic.png" alt="" className=" pt-[20px] " />
        </div>
      </div>
    </div>
  );
};

export default Traffic;
