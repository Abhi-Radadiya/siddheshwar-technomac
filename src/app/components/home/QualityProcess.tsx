import React from "react";
import quality from "@/assets/quality-checking.png";
import heat from "@/assets/heat.png";
import shot from "@/assets/shot.png";
import fetting from "@/assets/fetting.png";
import Image from "next/image";

export default function QualityProcess() {
  return (
    <>
      <div className="flex flex-row max-w-[80%] mx-auto justify-center my-24 items-center">
        <div className="max-w-[750px] mr-16">
          <h2 className="tracking-wide">Quality through Process</h2>

          <h6 className="mt-3 mb-2">
            Ensuring Excellence with Meticulous Process Quality
          </h6>

          <div className="h-1 w-[150px] bg-black mb-4" />

          <p className="text-justify leading-9 max-w-[600px]">
            We sets the standard for excellence in forging technology,
            consistently delivering products of unparalleled quality. With a
            commitment to precision engineering and innovative solutions, the
            company ensures that each forged component meets the highest
            industry standards.
          </p>
        </div>

        <div className="">
          <div className="flex flex-row gap-8 mb-5">
            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500 justify-center mx-auto flex items-center">
              <div className="">
                <div className="flex justify-center mb-3 mx-auto">
                  <Image src={quality} alt="" />
                </div>
                <span>Quality checking</span>
              </div>
            </div>

            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500 justify-center mx-auto flex items-center">
              <div className="">
                <div className="flex justify-center mb-3 mx-auto">
                  <Image src={heat} alt="" />
                </div>
                <span>Heat treatment</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500 justify-center mx-auto flex items-center">
              <div className="">
                <div className="flex justify-center mb-3 mx-auto">
                  <Image src={shot} alt="" />
                </div>
                <span>Shot blasting</span>
              </div>
            </div>

            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500 justify-center mx-auto flex items-center">
              <div className="">
                <div className="flex justify-center mb-3 mx-auto">
                  <Image src={fetting} alt="" />
                </div>
                <span>Fettling shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
