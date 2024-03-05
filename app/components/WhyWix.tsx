import React from "react";

const WhyWix = () => {
  return (
    <section className="flex  items-center justify-center py-10 md:py-28 px-5 mt-[500px] md:mt-10  ">
      <div className="max-w-6xl pt-[240px] md:pt-[140px]  ">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-[40%_60%] gap-4">
            <div className="max-w-[250px] md:max-w-sm  md:text-[60px]  text-[34px] md:leading-[69px] leading-[45px] ">
              Why the Wix website builder is the best choice for you
            </div>
            <div className="md:px-[40px]  flex-col  items-center">
              <p className="text-[16px]">
                When you create a website using our website builder, everything
                is there to build your business the way you want. Run it with
                total peace of mind knowing that there’s enterprise-grade
                infrastructure built into every site with free reliable web
                hosting, around-the-clock maintenance and fully managed
                security.
              </p>
              <p className=" text-[16px] pt-5">
                Use our tailor-made, customizable templates and 1000s of design
                features to help bring your vision to life. You can also add
                your own code for total design control.
              </p>
              <p className="text-[16px] pt-5">
                Bring more people to your site and convert visitors with a wide
                range of built-in eCommerce and business solutions like SEO and
                marketing tools. Plus, you’ll always have the support you need
                with 24/7 customer care.
              </p>
              <p className="text-[16px] pt-5">
                You can start by creating a free website with Wix. Over 250
                million people worldwide have chosen us to grow online. You can,
                too.
              </p>
              <button className="text-white bg-black border font-medium py-2 px-2 rounded-full my-6 hover:bg-hoverBlue">
                <span className="flex items-center justify-center">
                  <span className="px-2 text-[18px] font-[400px] leading-normal">
                    Get Started
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWix;
