"use client";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Templates = () => {

  
    // const swiperParams = {
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     loop: true,
    //     autoplay: {
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     },
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //   };
  
  const buttons = [
    { label: "Online Store", color: "bg-red-500" },
    { label: "Portfolio", color: "bg-green-500" },
    { label: "Blog", color: "bg-blue-500" },
    { label: "Consultant", color: "bg-yellow-500" },
    { label: "Service Business", color: "bg-purple-500" },
    { label: "Restaurant", color: "bg-pink-500" },
    { label: "Event", color: "bg-pink-500" },
    { label: "Other", color: "bg-pink-500" },
  ];
  return (
    <div className="bg-black  w-full text-white md:pb-20">
      <div className=" pt-10 md:pt-40 flex items-center justify-center ">
        <div className="max-w-4xl  px-3 md:text-center">
          <p
            className="md:text-[70px] text-[40px] md:leading-[79px] mb-3 " >
            Website templates that set you up for success
          </p>
          <div>
            <p className="text-[18px]  leading-[24px] py-3">
              Get a headstart on your journey with 900+ free, customizable
              website templates, strategically researched and tailored for every
              industry — or start from a blank canvas on our website builder.
            </p>
            <button className="text-black bg-white hover:bg-gray-300 border font-medium py-2 px-4 rounded-full my-6">
              <span className="flex items-center justify-center">
                <span className="px-2 text-[24px] font-[400px] leading-normal">
                  Get Started
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
     {/* <Slide slidesToScroll={1} slidesToShow={1} indicators={true}>
                
                <img src="small-can.png" alt="" />
        
        <img src="small-can.png" alt="" />
            </Slide>  */}
     
     
    </div>
  );
};

export default Templates;

