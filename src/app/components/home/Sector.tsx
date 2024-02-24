"use client";
import React from "react";
import serve1 from "@/assets/serve1.png";
import serve2 from "@/assets/serve2.png";
import serve3 from "@/assets/serve3.png";
import serve4 from "@/assets/serve4.png";
import serve5 from "@/assets/serve5.png";
import serve6 from "@/assets/serve6.png";
import Image from "next/image";

export default function Sector() {
  const product = [
    { label: "borewell", description: "dbhjb jhj sd", image: serve1 },
    { label: "Pipe fitting", description: "dbhjb jhj sd", image: serve2 },
    { label: "Energy generation", description: "dbhjb jhj sd", image: serve3 },
    { label: "Transportation", description: "dbhjb jhj sd", image: serve4 },
    { label: "Agriculture", description: "dbhjb jhj sd", image: serve5 },
    { label: "Petroleum Industry", description: "dbhjb jhj sd", image: serve6 },
  ];

  return (
    <>
      {/* <header
        className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg_image`}
      >
        
      </header> */}

      <div className="bg-gradient pt-10 pb-12">
        <div className="mx-auto justify-center max-w-[80%]">
          <h2 className="mb-2.5">Where we deliver excellence</h2>

          <div className="h-1.5 bg-black w-[150px] mb-4" />

          <p className="text-justify leading-9 tracking-wide">
            We have specializes in providing cutting-edge forging technology
            solutions across a spectrum of industries. From automotive and
            aerospace to energy and manufacturing, our expertise spans diverse
            sectors, ensuring that our clients benefit from customized and
            high-performance forged components that meet the unique demands of
            their respective industries. With a commitment to excellence, we
            consistently deliver precision-engineered solutions that drive
            success in every sector we serve.
          </p>

          <div className="lgN:grid h-full grid-cols-3 place-items-center gap-6 flex flex-row w-full justify-between mdN:grid-cols-2 mobileN:flex-col mobileN:justify-center mobileN:mx-auto">
            {product.map((el, index) => (
              <div key={index} className="">
                <div className="transform rounded-br-[50px] rounded-tl-[50px] h-[120px] w-[120px] bg-white shadow-xl transition duration-300 hover:rotate-12">
                  <Image src={el.image} alt="" />
                </div>
                <div className="mt-5 w-full text-center max-w-[120px]">
                  <span className="uppercase">{el.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
