import React from "react";

const Travel = () => {
  return (
    <div className="w-full h-screen bg-[#6e5fd4] mb-10">
      <div className="w-full h-full grid  md:grid-cols-[60%_40%] ">
        <div className="bg-[#6e5fd4]">
          <img
            src="travel.png"
            alt=""
            className="w-full hidden md:flex pt-[20px]  px-3 object-cover"
          />
        </div>
        <div className="bg-[#DAC4FB] pt-5 md:pt-[160px] px-[40px] flex-col  items-center">
          <span className="md:text-[60px]  text-[40px] leading-[40px] md:leading-[59px] ">
            And create it your way
          </span>
         <div className="hidden md:flex">
         <ul className="space-y-3 text-[12px] mt-10">
            <li>- Smart drag and drop editor</li>
            <li>- 1000’s of advanced design capabilities</li>
            <li>- Custom domain, logo and more brand tool</li>
            <li>- Full-stack web dev tools for custom functionality</li>
            <li>- AI technology that creates a site for you</li>
          </ul>
         </div>
          <ul className="mt-[20px] md:hidden list-disc space-y-3 text-[18px]">
            <li>Smart drag and drop editor</li>
            <li>1000’s of advanced design capabilities</li>
            <li>Custom domain, logo and more brand tool</li>
            <li>Full-stack web dev tools for custom functionality</li>
            <li>AI technology that creates a site for you</li>
          </ul>
          <button className="text-white bg-black border font-medium py-2 px-2 rounded-full my-6 hover:bg-slate-800">
            <span className="flex items-center justify-center">
              <span className="px-2 text-[14px] font-[400px] leading-normal">
                Get Started
              </span>
            </span>
          </button>
        </div>
        <div className="bg-[#6e5fd4]">
          <img
            src="travel.png"
            alt=""
            className="w-full flex md:hidden px-3 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
