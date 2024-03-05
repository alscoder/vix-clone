import React from "react";

const Platform = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-6xl my-7">
        <h1 className="max-w-[200px] font-bold md:font-normal md:max-w-xl md:mt-16 py-10 text-[24px] md:text-[64px] md:leading-[76px]">
          One platform, infinite possibilities
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-1 lg:grid-cols-3">
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="font-bold py-6">Unlimited creation</h1>
              <p className="text-[18px] leading-[26px]">
                Create a website with a complete suite of advanced
                functionalities and bring your vision to life.
              </p>
            </div>
          </div>
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="font-bold py-6">Powerful infrastructure</h1>
              <p className="text-[18px] leading-[26px]">
                Get an enterprise-grade foundation, engineered for your
                limitless scalability and peace of mind.
              </p>
            </div>
          </div>
          <div className="max-w-xs border-t-2 border-black">
            <div className="pr-4">
              <h1 className="font-bold py-6">The Place for Growth</h1>
              <p className="text-[18px] leading-[26px]">
                Convert and scale seamlessly with built-in marketing and
                business solutions.
              </p>
            </div>
          </div>
        </div>
        <button className="text-white hover:bg-hoverBlue bg-black border mt-10 font-medium py-2 px-4 rounded-full ">
              <span className="flex items-center justify-center">
                <span className="px-2 text-[24px] font-[400px] leading-normal">
                  Get Started
                </span>
              </span>
            </button>
      </div>
    </section>
  );
};

export default Platform;
