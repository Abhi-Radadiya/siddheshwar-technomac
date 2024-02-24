import Image from "next/image";
import React from "react";
import anchorShackle from "@/assets/products/anchorShackle.jpg";
import bigYOak from "@/assets/products/bigYOak.jpg";
import blindFLange from "@/assets/products/blindFLange.jpg";
import clamo from "@/assets/products/clamo.jpg";
import connectingROad2i from "@/assets/products/connectingROad2i.jpg";
import deadENdPin from "@/assets/products/deadENdPin.jpg";
import flange from "@/assets/products/flange.jpg";
import forgedYoke from "@/assets/products/forgedYoke.jpg";
import halfConnectinROad from "@/assets/products/halfConnectinROad.jpg";
import inclinedConnectingROad from "@/assets/products/inclinedConnectingROad.jpg";
import socketClevise from "@/assets/products/socketClevise.jpg";
import spinder from "@/assets/products/spinder.jpg";
import trunionPin from "@/assets/products/trunionPin.jpg";
import trunionShaft from "@/assets/products/trunionShaft.jpg";
import "@/app/who-we-are/style.css";

export default function page() {
  const menu = [
    { label: "Anchote Shackle", icon: anchorShackle },
    { label: "Big Yoke", icon: bigYOak },
    { label: "Blind FLanges", icon: blindFLange },
    { label: "Clamp", icon: clamo },
    { label: "Connecting Rod", icon: connectingROad2i },
    { label: "Dead End Pin", icon: deadENdPin },
    { label: "Flange", icon: flange },
    { label: "Yoke", icon: forgedYoke },
    { label: "Half Connection Road", icon: halfConnectinROad },
    { label: "Inclined Connection Road", icon: inclinedConnectingROad },
    { label: "Socket Clevise", icon: socketClevise },
    { label: "Splinder", icon: spinder },
    { label: "Trunion Pin", icon: trunionPin },
    { label: "Trunion Shaft", icon: trunionShaft },
  ];

  return (
    <>
      <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%] mdN:max-w-full mdN:py-0 mdN:pt-5">
        <h2 className="text-neutral-700 font-normal">
          Versatile Product Spectrum
        </h2>

        <div className="h-1.5 w-[200px] bg-[#5f5f5f] flex mx-auto mt-2 mb-10" />

        <p className="max-w-[55%] text-justify mx-auto mb-4 tracking-wide leading-9 lgN:max-w-[85%]">
          Our diverse range of products at Siddheshwar Technoforge spans across
          various industries, offering tailored solutions to meet the unique
          needs of our clients. From precision-forged components for the
          automotive and aerospace sectors to robust machinery parts for
          construction and mining, our wide array of products reflects our
          commitment to versatility and excellence.
        </p>

        <div className="mt-12">
          <div className="flex mx-auto mdN:max-w-[90%]">
            <div className="ag-courses_box w-full gap-x-24 gap-y-5 grid grid-cols-3 lgN:gap-x-12 lgN:grid-cols-2 mdN:gap-x-6">
              {menu.map((el, index) => (
                <div
                  className="ag-courses_item my-3 shadow-2xl border-b-2 border-l-2 border-neutral-300 rounded-tr-[28px] rounded-bl-[28px] flex-grow"
                  key={index}
                >
                  <div className="ag-courses-item_link min-h-[220px]">
                    <div className="ag-courses-item_bg z-[3]"></div>

                    <div className="ag-courses-item_date-box uppercase font-bold min-h-[60px] -z-20 my-auto flex">
                      <Image src={el.icon} alt="" />
                    </div>

                    <div className="tracking-wider mt-3 -mx-5">{el.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
