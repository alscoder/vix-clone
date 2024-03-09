import React from 'react'

const WebBuilder = () => {
  return (
    <section className="flex items-center justify-center pt-20 bg-[#F3EFE5] ">
    <div className="max-w-7xl my-7">
      <h1 className="max-w-xs md:max-w-2xl mt-16 py-10 text-[34px] md:text-[54px] leading-[45px] md:leading-[66px]">
      A website builder  engineered for growth
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:gap-2 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-xs border-t-2 md:border-none border-black">
          <div className="pr-4">
            <h1 className="font-bold pt-2">Faster loading </h1>
            <p className="text-[18px] leading-[26px]">
            Wix is designed for performance so your site loads faster.
            </p>
          </div>
        </div>
        <div className="max-w-xs border-t-2 md:border-none border-black">
          <div className="pr-4 py-3">
            <h1 className="font-bold pt-2">Build with SEO in mind</h1>
            <p className="text-[16px] leading-[26px]">
            Get the SEO capabilities you need to optimize your site for search visibility.
            </p>
          </div>
        </div>
        <div className="max-w-xs border-t-2 md:border-none border-black">
          <div className="pr-4 py-3">
            <h1 className="font-bold pt-2">Enterprise grade security</h1>
            <p className="text-[16px] leading-[26px]">
            We keep your site and visitors’ data protected, 24/7.
            </p>
          </div>
        </div>
        <div className="max-w-xs border-t-2 md:border-none border-black ">
          <div className="pr-4 py-3">
            <h1 className="font-bold pt-2">Resilient infrastructure</h1>
            <p className="text-[16px] leading-[26px]">
            Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.
            </p>
          </div>
        </div>
        <div className="max-w-xs border-t-2 md:border-none border-black">
          <div className="pr-4 py-3">
            <h1 className="font-bold pt-2">Accessible for everyone</h1>
            <p className="text-[16px] leading-[26px]">
            Make your own website inclusive with built-in accessibility tools.
            </p>
          </div>
        </div>
      </div>
      <button className="text-white bg-black hover:bg-hoverBlue border mt-10 font-medium py-2 px-4 rounded-full ">
        <span className="flex items-center justify-center">
          <span className="px-2 text-[24px] font-[400px] leading-normal">
            Get Started
          </span>
        </span>
      </button>
    </div>
  </section>
  )
}

export default WebBuilder