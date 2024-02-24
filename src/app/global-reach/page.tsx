import PageHeader from "@/partials/PageHeader";
import Image from "next/image";
import React from "react";
import Australia from "../../assets/australia.png";
import United_States from "../../assets/United_States.png";
import United_Kingdom from "../../assets/United_Kingdom.png";
import europe from "../../assets/european-union.png";
import globalREach from "@/assets/globalReach.png";
import Canada from "@/assets/canada.png";

export default function Global() {
  return (
    <>
      <PageHeader title="Global Reach" />
      <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%]">
        <h2 className="text-neutral-700 font-normal">
          Impact Across Continents
        </h2>
        <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />
        <p className="max-w-[55%] text-justify mx-auto mb-4 tracking-wide leading-9 lgN:max-w-full ">
          Siddeshwar Technoforge extends its influence globally, leaving an
          indelible mark on industries worldwide. Our commitment to delivering
          top-tier forging technology transcends borders, fostering partnerships
          and driving innovation across continents. With a reputation for
          unparalleled quality and reliability, Siddeshwar Technoforge is at the
          forefront of forging a global legacy of excellence.
        </p>

        <Image src={globalREach} alt="bbbc" />

        <h2 className="text-neutral-700 font-normal my-10">
          Partner across country
        </h2>

        <div className="flex flex-row w-full justify-between mdN:grid mdN:grid-cols-2">
          <div className="mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={90}
                src={Australia}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Australia</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                className="mx-auto mb-4"
                src={United_States}
                alt="alterImg"
              />
              <span className="">United States</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                className="mx-auto mb-4"
                src={United_Kingdom}
                alt="alterImg"
              />
              <span className="">United Kingdom</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                className="mx-auto mb-4"
                src={Canada}
                alt="alterImg"
              />
              <span className="">Canada</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={europe}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">European union</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
