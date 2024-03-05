"use client";
import React, { useState } from "react";
import { links } from "./MyLinkx";
import { IoChevronDown } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      <div className="md:flex hidden items-center gap-2">
        <div className="px-3 text-left md:cursor-pointer group">
          <p
            className="py-7 text-[14px] flex justify-between items-center md:pr-0 pr-5 group"
            onClick={() => {
              heading !== "Creation" ? setHeading("Creation") : setHeading("");
              setSubHeading("");
            }}
          >
            Creation
            <span className="text-xl md:hidden inline">
              <IoChevronDown />
            </span>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <IoChevronDown />
            </span>
          </p>
          <div>
            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
              <div className="py-3 px-2">
                <div
                  className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                ></div>
              </div>
              <div className="bg-white  p-5 grid grid-flow-col grid-rows-4 auto-rows-fr gap-4">
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Website Design</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Discover all the ways you can create and design your
                      website on Wix.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">
                    Advanced Web Development
                  </h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Explore 800+ designer-made templates & start with the
                      right one for you.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Website Design</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Build web applications on Velo's open dev platform.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Mobile App</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Build, customize and manage your website on the go.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Hire a professional</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Find a professional to help build, design and promote your
                      site.
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 text-left md:cursor-pointer group">
          <p
            className="py-7 text-[14px] flex justify-between items-center md:pr-0 pr-5 group"
            onClick={() => {
              heading !== "Business" ? setHeading("Business") : setHeading("");
              setSubHeading("");
            }}
          >
            Business
            <span className="text-xl md:hidden inline">
              <IoChevronDown />
            </span>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <IoChevronDown />
            </span>
          </p>
          <div>
            <div className="absolute top-20  hidden group-hover:md:block hover:md:block">
              <div className="py-4 px-2">
                <div
                  className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                ></div>
              </div>
              <div className="bg-white p-5 grid grid-flow-col grid-rows-4 auto-rows-fr gap-4">
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">E-commerce Website</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Sell products and manage fulfillment from one eCommerce
                      platform.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Service Business</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Manage bookings, payments, staff, and clients with our
                      scheduling solution.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Restaurants</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Display your menu and take orders & reservations online.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Blog Website</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Build, customize and manage your website on the go.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Fitness</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Offer classes and manage your clients, bookings and
                      payments online.
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 text-left md:cursor-pointer group">
          <p
            className="py-7 text-[14px] flex justify-between items-center md:pr-0 pr-5 group"
            onClick={() => {
              heading !== "Resources"
                ? setHeading("Resources")
                : setHeading("");
              setSubHeading("");
            }}
          >
            Resources
            <span className="text-xl md:hidden inline">
              <IoChevronDown />
            </span>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <IoChevronDown />
            </span>
          </p>
          <div>
            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
              <div className="py-3 px-2">
                <div
                  className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                ></div>
              </div>
              <div className="bg-white  p-5 grid grid-flow-col grid-rows-4 auto-rows-fr gap-4">
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">All Features</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Find everything you need to build your site and run your
                      business.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">
                    Web Design Inspiration
                  </h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Get inspired by unique designs & powerful websites built
                      on Wix.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Wix Learn</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Take video courses & lessons and gain the skills you need
                      to succeed online.
                    </Link>
                  </li>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Wix Blog</h1>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link href="/" className="hover:text-primary">
                      Get business tips, online marketing guidance, and the
                      latest website trends.
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 text-left md:cursor-pointer group">
          <p className="py-7 text-[14px] flex justify-between items-center md:pr-0 pr-5 group">
            Pricing
          </p>
        </div>
        <div className="px-3 text-left md:cursor-pointer group">
          <p className="py-7 text-[14px] flex justify-between items-center md:pr-0 pr-5 group">
            Support
          </p>
        </div>
        <div className="px-3 text-left md:cursor-pointer group">
          <p
            className="text-[14px] flex justify-between items-center md:pr-0 pr-5 group border-l-2 border-black px-6"
            onClick={() => {
              heading !== "Resources"
                ? setHeading("Resources")
                : setHeading("");
              setSubHeading("");
            }}
          >
            More
            <span className="text-xl md:hidden inline">
              <IoChevronDown />
            </span>
            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
              <IoChevronDown />
            </span>
          </p>
          <div>
            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
              <div className="py-3 px-2">
                <div
                  className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                ></div>
              </div>
              <div className="bg-white  p-5 grid grid-flow-col grid-rows-2 auto-rows-fr gap-4">
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">Vix Studio</h1>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-lg font-semibold">
                    Enterprise
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLinks;

{
  /* Mobile menus */
}
{
  /* <div
            className={`
          ${heading === link.name ? "md:hidden" : "hidden"}
        `}
          > */
}
{
  /* sublinks */
}
{
  /* {link?.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline"> */
}
{
  /* <FaChevronUp />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */
}

{
  /* ))} */
}
