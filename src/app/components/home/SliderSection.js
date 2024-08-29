"use client";
import React from "react";
import Slider from "react-animated-slider";
import horizontalCss from "./horizontal.css";
import "./slider-animations.css";
import { TbArrowUpRight } from "react-icons/tb";
import blackImage from "@/assets/black-image.png";
import Image from "next/image";
import slideForging from "@/assets/slider_forging.jpg";
import precisionMachining from "@/assets/slider_precision.jpg";
import innovative from "@/assets/slider_inovative.jpg";
import closeDieForging from "@/assets/closed-die-forging.jpg";

export default function Page() {
  const content = [
    {
      title: "Siddheshwar technoforge",
      description:
        "Discover our legacy of precision and innovation in the world of forging.",
      link: "/about-us",
      image: closeDieForging,
    },
    {
      title: "Uncover the brilliance of forging",
      description:
        "A symphony of heat, force, and expertise crafting perfection with every strike.",
      image: slideForging,
      link: "/product",
    },
    {
      title: "Precision Machining, Maximum Performance",
      description:
        "Explore our cutting-edge machining capabilities delivering unparalleled precision and quality.",
      image: precisionMachining,
      link: "/infrastructure",
    },
    {
      title: "Innovative Solutions, Endless Possibilities",
      description:
        "Browse our diverse product catalog for forging excellence tailored to your industry needs.",
      image: innovative,
      link: "/application",
    },
  ];

  return (
    <div>
      <Slider
        classNames={`h-[80vh] ${horizontalCss}`}
        direction="horizontal"
        // autoplay={3000}
        infinite={true}
      >
        {content.map((item, index) => (
          <div key={index} className="text-white relative w-full h-[80vh]">
            <div className="absolute top-0">
              <Image
                alt=""
                src={item.image ?? blackImage}
                className="w-screen h-[80vh] smallTabM:h-[200px]"
              />
              <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
            </div>

            <div className="center px-[10vw] max-w-[70vw] justify-center pt-[20vh] smallTabM:max-w-full smallTabM:px-2 mdN:max-w-full">
              <div className="backdrop-blur-[0px] rounded-2xl p-5">
                <h1 className="text-[36px] font-semibold mb-3 text-[#cdb6b6]">
                  {item.title}
                </h1>

                <p className="bg-[#757777] h-[5px] w-[16vw] mb-8" />

                <p className="text-xl text-[#f4f2e2] smallTabM:text-neutral-500">
                  {item.description}
                </p>

                <p>
                  <button
                    className="inline-flex group items-center mt-5 px-8 py-3 text-white rounded-full shadow-lg bg-[#5f3737] hover:bg-gradient-to-br from-green-200 to-yellow-200 hover:text-black"
                    style={{ transition: "none", transitionDuration: "0s" }}
                  >
                    Read more
                    <TbArrowUpRight className="w-5 h-5 ml-2 group-hover:rotate-45 transition-all duration-200 ease-out" />
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
