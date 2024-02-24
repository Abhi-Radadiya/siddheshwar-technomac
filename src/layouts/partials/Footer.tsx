"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <>
      {/* <footer className="bg-theme-light dark:bg-darkmode-theme-light">
        <div className="container">
          <div className="row items-center py-10">
            <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
              <Logo />
            </div>
            <div className="mb-8 text-center lg:col-6 lg:mb-0">
              <ul>
                {menu.footer.map((menu) => (
                  <li className="m-3 inline-block" key={menu.name}>
                    <Link href={menu.url}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
              <Social source={social.main} className="social-icons" />
            </div>
          </div>
        </div>
        <div className="border-t border-border py-7 dark:border-darkmode-border">
          <div className="container text-center text-light dark:text-darkmode-light">
            <p dangerouslySetInnerHTML={markdownify(copyright)} />
          </div>
        </div>
      </footer> */}

      <div className="bg-black p-4 items-center lgN:px-10">
        <div className="flex flex-row justify-between w-full max-w-[80%] mx-auto mb-36 pt-10 mdN:max-w-full mdN:block mdN:mb-10">
          <div className="flex flex-row w-full max-w-[60%]">
            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide mr-40 mdN:mb-12">
              <div>
                <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  QUICK LINK
                </pre>
              </div>
              <div className="flex flex-col gap-2">
                <Link className="hover:tracking-wide" href="/who-we-are">
                  WHO WE ARE
                </Link>
                <Link className="hover:tracking-wide" href="/infrastructure">
                  INFRASTRUCTURE
                </Link>
                <Link className="hover:tracking-wide" href="/product">
                  PRODUCTS
                </Link>
                <Link className="hover:tracking-wide" href="/global-reach">
                  GLOBAL REACH
                </Link>
                <Link className="hover:tracking-wide" href="/application">
                  APPLICATION
                </Link>
              </div>
            </div>

            {/* <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide"> */}
            {/* <div>
                <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  dates &nbsp;
                </pre>
              </div>
              <p>23 Dec 2021</p>
              <p>30 May 2022</p>
              <p>23 Dec 2021 to 31 May 2022</p> */}
            {/* </div> */}
          </div>

          <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
            <div className="flex justify-start">
              <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                Get in touch
              </pre>
            </div>

            <p className="space-x-3 pb-3">
              <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                SIDDHESHWAR TECHNOFORGE PVT LTD
              </strong>
            </p>

            <div className="leading-7">
              <p>
                Survey No.120/1, Plot No.4, B/H. Ishwar Weighbridge,
                <br />
                Padaval Veraval Road,
                <br />
                Padvala, Tal. Kotdasangani, RAJKOT - 360 024
              </p>
            </div>

            <div className="leading-7 mt-4 text-[15px] font-[500]">
              <p className="space-x-3 hover:text-[#cacaca]">
                <a href="#">
                  +91 81400 38097 (
                  <span className="text-[13px] font-[500]">
                    General Enquiry
                  </span>
                  )
                </a>
              </p>

              <p className="space-x-3 hover:text-[#cacaca]">
                <a href="#"> info@siddheshwartechnoforge.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        {/* <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-pinterest"></i>
            </a>
          </p>
          <p>
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-telegram"></i>
            </a>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
