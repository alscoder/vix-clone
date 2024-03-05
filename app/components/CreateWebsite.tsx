import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CreateWebsite = () => {
  return (
    <section className="flex items-center justify-center bg-[#F3EFE5] ">
      <div className="max-w-7xl my-7  items-center text-[20px] leading-[32px]">
        <div className="px-6">
          <h1 className="text-[34px] md:text-[66px] py-6 leading-[44px] md:leading-[84px]">
            How to create a website for free
          </h1>
          <div className="max-w-4xl py-6 mb-3 flex justify-center mx-auto items-center">
            <p className="font-bold">
              Follow these 6 simple steps to create a website today.
            </p>
          </div>
          <ol className="list-decimal space-y-6   ml-5">
            <li>
              <span className="font-bold">
                Sign up for a free website builder.
              </span>
              Choose what kind of website you want to create.
            </li>
            <li>
              <span className="font-bold">
                ​Customize a template or get a website made for you.
              </span>{" "}
              Choose your starting point.
            </li>
            <li>
              <span className="font-bold">
                {" "}
                Drag and drop 1000s of design features.
              </span>{" "}
              Add text, galleries, videos, vector art and more.
            </li>
            <li>
              <span className="font-bold"> Get ready for business.</span> Add an
              online store, booking system, members area and blog.
            </li>
            <li>
              <span className="font-bold">
                Publish your website and go live.
              </span>{" "}
              Start building your professional online presence.
            </li>
            <li>
              <span className="font-bold"> Drive traffic to your site.</span>{" "}
              Use advanced SEO tools and integrated marketing solutions.
            </li>
          </ol>
          <div className="max-w-4xl py-6 mb-3 flex justify-center items-center gap-6">
            <div className="flex justify-between items-center gap-2 ">
              <button className="text-white bg-black border font-medium py-2 px-2 rounded-full my-6 hover:bg-hoverBlue">
                <span className="flex items-center justify-center">
                  <span className="px-2 text-[16px]  ">
                    Get Started
                  </span>
                </span>
              </button>
            </div>
            <Link href="#">
              <div className="flex justify-between items-center gap-2 hover:text-hoverBlue">
                <span className="text-[16px]  underline border-black">
                  Learn More
                </span>
                <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateWebsite;
