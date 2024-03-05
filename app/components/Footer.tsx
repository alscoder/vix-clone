import Link from "next/link";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { CiFacebook, CiYoutube, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container  py-12 mx-auto">
        <div className=" hidden md:grid  mt-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <div>
            <h3 className="text-sm font-medium  ">Product</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Overview
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Website Builder
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Website Design
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Wix Features
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                App Market
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Web Hosting
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Domain Names
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Website Accessibility
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Mobile App Builder
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium  ">Solutions</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Online Store
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Online Booking
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Restaurant Website
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Blog Website
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Portfolio Website
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                eCommerce Website
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Wix Studio
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Enterprise Solutions
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Student Website
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Professional Tools
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Logo Maker
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium  ">Solutions</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Wix Blog
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Privacy and Security Hub
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                SEO Learning Hub
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Wix Encyclopedia
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium  ">Support</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Hire a Professional
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Report Abuse
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                System Status
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium  ">Company</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Press & Media
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Investor Relations
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Wix Capital
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Accessibility Statement
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Patent Notice
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Sitemap
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Careers
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] font-bold  ">Wix</h3>
            <div className="flex flex-col items-start mt-4 space-y-4">
              <p className="text-gray-500 text-xs">
                The Wix website builder offers a complete solution from
                enterprise-grade infrastructure and business features to
                advanced SEO and marketing tools–enabling anyone to create and
                grow online.
              </p>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-500 text-xs transition-colors duration-200   hover:text-hoverBlue"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:hidden px-5 space-y-4">
        <div className="my-10">
            <p className="text-[24px] font-bold  ">Wix</p>
            <div className="flex flex-col items-start mt-4">
              <p className=" text-[16px]">
                The Wix website builder offers a complete solution from
                enterprise-grade infrastructure and business features to
                advanced SEO and marketing tools–enabling anyone to create and
                grow online.
              </p>
            </div>
          </div>
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className=""> Product</span>
              <span className="transition group-open:rotate-180">
                <IoChevronDown />
              </span>
            </summary>
            <ul className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <Link href="#">
                <li>Overview</li>
              </Link>
              <Link href="#">
                <li>Website Builder</li>
              </Link>
              <Link href="#">
                <li>Website Design</li>
              </Link>
              <Link href="#">
                <li>Wix Features</li>
              </Link>
              <Link href="#">
                <li>App Market</li>
              </Link>
              <Link href="#">
                <li>Web Hosting</li>
              </Link>
              <Link href="#">
                <li>Domain Names</li>
              </Link>
              <Link href="#">
                <li>Website Accessibility</li>
              </Link>
              <Link href="#">
                <li>Mobile App Build</li>
              </Link>
            </ul>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className="">Solutions</span>
              <span className="transition group-open:rotate-180">
                <IoChevronDown />
              </span>
            </summary>
            <ul className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <Link href="#">
                <li> Online Store</li>
              </Link>
              <Link href="#">
                <li>Online Booking</li>
              </Link>
              <Link href="#">
                <li>Restaurant Website</li>
              </Link>
              <Link href="#">
                <li>Blog Website</li>
              </Link>
              <Link href="#">
                <li>Portfolio Website</li>
              </Link>
              <Link href="#">
                <li>eCommerce Website</li>
              </Link>
              <Link href="#">
                <li>Wix Studio</li>
              </Link>
              <Link href="#">
                <li>Enterprise Solutions</li>
              </Link>
              <Link href="#">
                <li>Student Website</li>
              </Link>
              <Link href="#">
                <li>Professional Tools</li>
              </Link>
              <Link href="#">
                <li>Logo Maker</li>
              </Link>
            </ul>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className=""> Learn</span>
              <span className="transition group-open:rotate-180">
                <IoChevronDown />
              </span>
            </summary>
            <ul className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <Link href="#">
                <li>Wix Blog</li>
              </Link>
              <Link href="#">
                <li>Privacy and Security Hub</li>
              </Link>
              <Link href="#">
                <li>SEO Learning Hub</li>
              </Link>
              <Link href="#">
                <li>Wix Encyclopedia</li>
              </Link>
            </ul>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className=""> Support</span>
              <span className="transition group-open:rotate-180">
                <IoChevronDown />
              </span>
            </summary>
            <ul className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <Link href="#">
                <li>Help Center</li>
              </Link>
              <Link href="#">
                <li>Hire a Professional</li>
              </Link>
              <Link href="#">
                <li>Report Abuse</li>
              </Link>
              <Link href="#">
                <li>System Status</li>
              </Link>
            </ul>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className=""> Company</span>
              <span className="transition group-open:rotate-180">
                <IoChevronDown />
              </span>
            </summary>
            <ul className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <Link href="#">
                <li>About</li>
              </Link>
              <Link href="#">
                <li>Contact Us</li>
              </Link>
              <Link href="#">
                <li>Press & Media</li>
              </Link>
              <Link href="#">
                <li>Investor Relations</li>
              </Link>
              <Link href="#">
                <li>Wix Capital</li>
              </Link>
              <Link href="#">
                <li>Accessibility Statement</li>
              </Link>
              <Link href="#">
                <li>Patent Notice</li>
              </Link>
              <Link href="#">
                <li>Sitemap</li>
              </Link>
              <Link href="#">
                <li>Careers</li>
              </Link>
            </ul>
          </details>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex gap-2">
            <CiFacebook />
            <CiYoutube />
            <CiInstagram />
            <CiTwitter />
            <CiLinkedin />
          </div>
          <div className="flex flex-col   items-center sm:flex-row gap-4">
            <p className="text-[16px]">Terms of Use</p>
            <p className="text-[16px]">Privacy Policy</p>
            <p className="text-[16px]">© 2006-2024 Wix.com, Inc</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
