import PageHeader from "@/partials/PageHeader";
import Image from "next/image";
import React from "react";
import worldMap from "../../assets/worldmap.jpg";
import Australia from "../../assets/Australia.png";
import Bangladesh from "../../assets/Bangladesh.png";
import Colombia from "../../assets/Colombia.png";
import France from "../../assets/France.png";
import Indonesia from "../../assets/Indonesia.png";
import Mauritius from "../../assets/Mauritius.png";
import Nepal from "../../assets/Nepal.png";
import Oman from "../../assets/Oman.png";
import South_Africa from "../../assets/South_Africa.png";
import Sri_Lanka from "../../assets/Sri_Lanka.png";
import United_Arab_Emirates from "../../assets/United_Arab_Emirates.png";
import United_States from "../../assets/United_States.png";
import United_Kingdom from "../../assets/United_Kingdom.png";
import Vietnam from "../../assets/Vietnam.png";
import Jordan from "../../assets/Jordan.png";
import europe from "../../assets/european-union.png";

export default function Global() {
  return (
    <>
      <PageHeader title="Global Reach" />
      <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%]">
        <h2 className="text-neutral-700 font-normal">
          Impact Across Continents
        </h2>
        <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />
        <p className="max-w-[55%] text-justify mx-auto mb-4 tracking-wide leading-9  ">
          Siddeshwar Technoforge extends its influence globally, leaving an
          indelible mark on industries worldwide. Our commitment to delivering
          top-tier forging technology transcends borders, fostering partnerships
          and driving innovation across continents. With a reputation for
          unparalleled quality and reliability, Siddeshwar Technoforge is at the
          forefront of forging a global legacy of excellence.
        </p>

        <Image src={worldMap} alt="bbbc" />

        <h2 className="text-neutral-700 font-normal mb-10">
          Partner across country
        </h2>

        <div className="row">
          <div className="md:col-2 col-6 mb-8">
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

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Bangladesh}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Bangladesh</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Colombia}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Colombia</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={France}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">France</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Indonesia}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Indonesia</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Mauritius}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Mauritius</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Nepal}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Nepal</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Oman}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Oman</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                className="mx-auto mb-4"
                height={70}
                src={South_Africa}
                alt="alterImg"
              />
              <span className="">South Africa</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Sri_Lanka}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Sri Lanka</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                className="mx-auto mb-4"
                src={United_Arab_Emirates}
                alt="alterImg"
              />
              <span className="">United Arab Emirates</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
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

          <div className="md:col-2 col-6 mb-8">
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

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main">
              <Image
                width={100}
                height={70}
                src={Vietnam}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Vietnam</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
            <div className="imd-desc-main text-center items-center">
              <Image
                width={100}
                height={70}
                src={Jordan}
                alt="alterImg"
                className="mx-auto mb-4"
              />
              <span className="">Jordan</span>
            </div>
          </div>

          <div className="md:col-2 col-6 mb-8">
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
