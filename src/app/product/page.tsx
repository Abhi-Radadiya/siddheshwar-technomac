import Image from "next/image";
import React from "react";
import picture1 from "@/assets/picture1.png";
import picture2 from "@/assets/picture2.png";
import picture3 from "@/assets/picture3.png";
import picture4 from "@/assets/picture4.png";
import picture5 from "@/assets/picture5.png";
import picture6 from "@/assets/picture6.png";
import picture7 from "@/assets/picture7.png";
import picture8 from "@/assets/picture8.png";
import picture9 from "@/assets/picture9.png";
import picture10 from "@/assets/picture10.png";
import "@/app/who-we-are/style.css";

export default function page() {
  const menu = [
    { label: "", icon: picture1 },
    { label: "", icon: picture2 },
    { label: "", icon: picture3 },
    { label: "", icon: picture4 },
    { label: "", icon: picture5 },
    { label: "", icon: picture6 },
    { label: "", icon: picture7 },
    { label: "", icon: picture8 },
    { label: "", icon: picture9 },
    { label: "", icon: picture10 },
  ];

  return (
    <>
      <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%]">
        <h2 className="text-neutral-700 font-normal">
          Versatile Product Spectrum
        </h2>

        <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />

        <p className="max-w-[55%] text-justify mx-auto mb-4 tracking-wide leading-9  ">
          Our diverse range of products at Siddheshwar Technoforge spans across
          various industries, offering tailored solutions to meet the unique
          needs of our clients. From precision-forged components for the
          automotive and aerospace sectors to robust machinery parts for
          construction and mining, our wide array of products reflects our
          commitment to versatility and excellence.
        </p>

        <div className="row mt-12">
          <div className="max-w-[80%] mx-auto">
            <div className="ag-courses_box w-full gap-x-24 gap-y-5 grid grid-cols-3">
              {menu.map((el, index) => (
                <div
                  className="ag-courses_item my-3 shadow-2xl border-b-2 border-l-2 border-neutral-300 rounded-tr-[28px] rounded-bl-[28px]"
                  key={index}
                >
                  <div className="ag-courses-item_link min-h-[220px]">
                    <div className="ag-courses-item_bg z-[3]"></div>

                    <div className="ag-courses-item_date-box uppercase font-bold min-h-[60px] -z-20 my-auto flex">
                      <Image src={el.icon} alt="" />
                    </div>

                    <div className="tracking-wider mt-3">{el.label}</div>
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
