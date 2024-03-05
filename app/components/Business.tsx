import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Business = () => {
  return (
    <section className="flex items-center justify-center my-10">
      <div className="max-w-4xl my-7 items-center">
        <div className="max-w-[250px] md:max-w-3xl justify-start  md:text-center">
          <p className="md:text-[66px] pb-14 text-[34px] md:leading-[70px] leading-[45px]">
            Take your business where it needs to go
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-4 lg:gap-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
            <div className="max-w-xs  border-black">
              <div className="pr-4">
                <img src="/Online-shop.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3 text-[24px] ">e-commerce </h1>
                  <p className="text-[14px] leading-[26px]">
                    <Link href="#" className="underline">Sell online</Link> and manage your business with powerful eCommerce
                    solutions.
                  </p>
                  <div className="mt-6 md:flex hidden  justify-between">
                    <Link href="#">
                      <div className="flex  items-center gap-2 hover:text-hoverBlue">
                        <span className="text-[11px] border-b-2 border-black">
                          Create your eCommerce site
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                    <Link href="#">
                      {" "}
                      <div className="flex  items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[11px]  border-b-2 border-black">
                          Learn how
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6  flex-col md:hidden space-y-3  justify-between">
                    <Link href="#">
                      <div className="flex  items-center gap-2  hover:text-hoverBlue ">
                        <span className="text-[16px] border-b-2 border-black">
                          Create your eCommerce site
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex  items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[16px]  border-b-2 border-black">
                          Learn how
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs  border-black">
              <div className="pr-4">
                <img src="/f-1.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3  text-[24px]">Blog </h1>
                  <p className="text-[14px] leading-[26px]">
                    Create a free blog, grow a loyal audience and monetize your
                    content.
                  </p>
                  <div className="mt-6 md:flex hidden  justify-between">
                    <Link href="#">
                      <div className="flex  items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[11px] border-b-2 border-black">
                          Create your eCommerce site
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex  items-center gap-2   hover:text-hoverBlue">
                        <span className="text-[11px]  border-b-2 border-black">
                          Learn how
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6  flex-col md:hidden  justify-between ">
                    <Link href="#">
                      <div className="flex  items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[16px] border-b-2 border-black">
                          Create your own blog
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                    <Link href="#">
                      <div className="flex  items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[16px]  border-b-2 border-black">
                          Learn how
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs  border-black">
              <div className="pr-4">
                <img src="/scheduling.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3  text-[24px]">
                    Scheduling software
                  </h1>
                  <p className="text-[14px] leading-[26px]">
                    Offer your services and deliver a seamless booking
                    experience for your clients.
                  </p>
                  <div className="mt-6 flex justify-between">
                    <Link href="#">
                      {" "}
                      <div className="flex justify-between items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[16px] md:text-[11px] border-b-2 border-black">
                          Add your service
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs  border-black">
              <div className="pr-4">
                <img src="/f-3.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3  text-[24px]">Portfolio </h1>
                  <p className="text-[14px] leading-[26px]">
                    Increase your visibility and attract new clients with your
                    work
                  </p>
                  <div className="mt-6 flex justify-between">
                    <Link href="#">
                      <div className="flex justify-between items-center gap-2  hover:text-hoverBlue ">
                        <span className="text-[16px] md:text-[11px] border-b-2 border-black">
                          Create your Portfolio
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs border-black">
              <div className="pr-4">
                <img src="/f-5.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3  text-[24px]">
                    Domain and hosting{" "}
                  </h1>
                  <p className="text-[14px] leading-[26px]">
                    Get scalable, <Link href="#" className="underline">free web hosting</Link> when you create your own
                    website, and connect a <Link href="#" className="underline">professional domain name</Link>.
                  </p>
                  <div className="mt-6 flex justify-between">
                    <Link href="#">
                      <div className="flex justify-between items-center gap-2  hover:text-hoverBlue">
                        <span className="text-[16px] md:text-[11px] border-b-2 border-black">
                          Create a site
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs  border-black">
              <div className="pr-4">
                <img src="/f-4.png" alt="" />
                <div className="max-w-xs">
                  <h1 className="font-bold py-3  text-[24px]">
                    Branding tools{" "}
                  </h1>
                  <p className="text-[14px] ">
                    Establish a strong brand identity with a <Link href="#" className="underline">customizable logo</Link>,
                    color and text themes, and more.
                  </p>
                  <div className="mt-6 flex justify-between">
                    <Link href="#">
                      <div className="flex justify-between items-center gap-2  hover:text-hoverBlue ">
                        <span className="text-[16px] md:text-[11px] border-b-2 border-black">
                          Learn more
                        </span>
                        <FaArrowRightLong />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
