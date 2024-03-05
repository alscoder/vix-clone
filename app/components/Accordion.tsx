"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const AccordionSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-24   px-5 bg-white min-h-screen ">
      <div className="ml-36 ">
        <h2 className=" text-5xl mt-5">FAQ</h2>
      </div>
      <div className="grid divide-y border-y md:border  border-solid border-gray-400 divide-neutral-200 max-w-4xl mx-auto mt-8 ">
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span className=""> Is it easy to build a website</span>
              <span className="transition group-open:rotate-90">
              <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Yes. Wix offers a few different ways to create your own free
              website, so you can choose the creation process that works best
              for you. Need to get online fast? Answer a few simple questions
              and Wix ADI (Artificial Design Intelligence) will build a website
              for you. If you want more website design freedom, you can choose
              from hundreds of customizable templates, or start your design from
              scratch with Wix’s drag-and-drop website builder.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between font-bold text-[18px] md:text-2xl items-center cursor-pointer list-none gap-2">
              <span> What types of websites can you build on Wix?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              With our website creator, you have the freedom to design a site
              that perfectly fits your needs. You can build business websites
              for any industry with a whole host of different features. You can
              sell products with an online store, sell services and take
              bookings, share your thoughts on a blog, showcase your work with a
              beautiful portfolio, and much more. Our solutions are built not
              only for a variety of industries but also for businesses of all
              sizes, from a personal brand to an enterprise corporation.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> How do I create a website?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Here’s how to create your own website in 6 steps: Plan your
              website. First, think about the type of site you’re creating and
              your target audience. With that in mind, you can start mapping out
              the pages you want to incorporate like the “About” and “Contact”
              pages, perhaps a blog or a photo gallery, and a page for products
              or services. Choose a template. You can choose from a variety of
              fully functional templates, all professionally designed with the
              best site practices in mind. Browse the templates and select the
              one that best suits your needs, or start designing from a blank
              template. Customize your website. Once you’ve chosen a template,
              you can go in and customize every aspect of your site to match
              your brand. Add your products and services as well as your own
              text and images or even let our built-in AI tools generate them
              for you. Change the colors, fonts, and layouts, and dive into our
              advanced design features for unlimited creative freedom. Get a
              domain name. When trying to come up with the perfect domain name,
              you can use Wix to search and register available names, or connect
              an existing one to your new site. Optimize for search engines. Use
              a suite of advanced SEO tools to help you optimize your site and
              increase organic traffic. Publish and promote your website. Once
              you’re happy with your site, you’re ready to hit ‘publish’ and
              start gaining traffic. Now’s the time to promote your site through
              built in email marketing and social tools, and then start
              streamlining your customer management processes with a smart CRM
              system. By following these steps, you'll build a powerful online
              presence that drives business growth.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> Can I create a website without knowing how to code?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Absolutely. Our website creator is for everyone and makes it
              possible to create a high-quality website without knowing how to
              code. In the Wix Editor, you can drag and drop any feature you
              want and customize it to match the look and feel of your site. Of
              course, if you do know how to code, you can add advanced
              functionality to your site with Ve
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span>
                {" "}
                Should I use a website builder or hire a web developer?
              </span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              The free Wix website builder is intuitive to use. Looking for a
              specific web service? Explore the Wix Marketplace to find a
              certified freelancer or agency at a price that fits your budget.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> How do I build and host my website for free?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              When you create a free website with Wix, you get reliable,
              scalable and free web hosting. All your web content will be stored
              on secure servers located around the world. So no matter where
              your visitors come from, your site will load fast.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span>
                {" "}
                How can I make sure my data and my visitors' data are secure?
              </span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              At Wix, we take care of security for you. With every site you get
              enterprise-grade security. From threat prevention to real-time
              detection and rapid response, security is fully managed by our
              dedicated team of experts—24/7. This includes data encryption in
              transit using HTTPS, TLS 1.2+ and an automatic SSL certificate.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> How do I create a free website with a custom domain?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              You can create a free website with Wix that comes with a Wix
              domain. To instantly look more professional online, get a custom
              domain name. It adds credibility to your brand and helps visitors
              find you online. You can start building your brand by using your
              domain in a custom email address (info@mystunningwebsite.com),
              your social channels, email marketing campaigns and more. For
              inspiration use our Business Name Generator.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> How can I optimize my site for SEO on Wix?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              All Wix sites come with best-practice SEO defaults, including
              utilizing server-side rendering, customizable meta tags for all
              site pages, structured data markup, dynamic XML sitemaps, and
              more. Plus, you get a suite of built-in SEO tools to help you
              compete in organic search. Learn more.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> Is my site optimized for Core Web Vitals (CWV)?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Every new feature, component and element that we create is built
              with performance in mind, so no matter what type of business you
              have, you can create a high-performance website. Over the past
              year, we’ve managed to achieve dramatic improvements for CWV and
              increased the ratio of Wix sites in the Google CrUX report with
              good scores for all three CWV by over 10x. To learn more about how
              Wix prepared for CWV, check out this webinar we hosted with
              Google.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> Can I use a web builder to create a landing page?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Yes. You can create any kind of website with Wix. Explore
              beautiful HTML landing page templates in the landing page builder
              to get started.
            </p>
          </details>
        </div>
        <div className="py-5 md:p-5">
          <details className="group">
            <summary className="flex justify-between items-center font-bold text-[18px] md:text-2xl cursor-pointer list-none gap-2">
              <span> How can I design a logo website?</span>
              <span className="transition group-open:rotate-180">
                <GoPlus />
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              You can design your own logo for free with the intuitive Wix Logo
              Maker. Any logo you create is ready to go in high resolution for
              digital or print so your brand stays consistent.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
