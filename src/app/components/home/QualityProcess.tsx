import React from "react";

export default function QualityProcess() {
  return (
    <>
      <div className="flex flex-row max-w-[80%] mx-auto justify-center my-24 items-center">
        <div className="max-w-[750px] mr-10">
          <h2 className="tracking-wide">About quality through process</h2>
          <h6 className="mt-3 mb-2">
            SIDDHESHWAR TECHNOFORGE FOR AFTER SALES AND CUSTOMER SERVICE
            EXCELLENCE
          </h6>

          <div className="h-1.5 w-[150px] bg-black mb-4" />

          <p>
            Siddeshwar Technoforge sets the standard for excellence in forging
            technology, consistently delivering products of unparalleled
            quality. With a commitment to precision engineering and innovative
            solutions, the company ensures that each forged component meets the
            highest industry standards.
          </p>
        </div>

        <div className="">
          <div className="flex flex-row gap-8 mb-5">
            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500">
              <span>Quality checking</span>
            </div>
            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500">
              <span>Heat treatment</span>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500">
              <span>Shot blasting</span>
            </div>

            <div className="w-[175px] h-[120px] rounded-br-[20%] rounded-tl-[20%] border border-neutral-500">
              <span>Fettling shop</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
