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
      <div className="bg-gradient pt-10">
        <div className="mx-auto justify-center max-w-[80%] mb-12">
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

          <div className="flex flex-row w-full justify-between mt-6">
            {product.map((el, index) => (
              <div className="" key={index}>
                <div className="transform rounded-br-[50px] rounded-tl-[50px] h-36 w-36 bg-white shadow-xl transition duration-300 hover:rotate-12">
                  <div className="flex h-full justify-center items-center">
                    <span className="font-bold text-gray-500">
                      <Image src={el.image} alt="" />
                    </span>
                  </div>
                </div>
                <div className="mt-5 w-full text-center">
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
