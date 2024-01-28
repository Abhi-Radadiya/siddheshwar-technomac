import Image from "next/image";
import React from "react";
import aerospace from "../../assets/aerospace.jpg";
import agriculture from "../../assets/agriculture.jpg";
import airCompressor from "../../assets/air-compressor.jpg";
import automobile from "../../assets/automobile.jpg";
import automotive from "../../assets/automotive.jpg";
import bearing from "../../assets/bearing.jpg";
import construction from "../../assets/construction.jpg";
import defence from "../../assets/defence.jpg";
import fertilizer from "../../assets/fertilizer.jpg";
import fireFighting from "../../assets/fire-fighting.jpg";
import foodProcessing from "../../assets/food-processing.jpg";
import gearTransmission from "../../assets/gear-transmission.jpg";
import industrial from "../../assets/industrial.jpg";
import marine from "../../assets/marine.jpg";
import nuclearPower from "../../assets/nuclear-power.jpg";
import oilField from "../../assets/oil-field.jpg";
import pharmaceutical from "../../assets/pharmaceutical.jpg";
import pipeFittings from "../../assets/pipe-fittings.jpg";
import powerEnergy from "../../assets/power-energy.jpg";
import pumpValve from "../../assets/pump-valve.jpg";
import railway from "../../assets/railway.jpg";
import ropeway from "../../assets/ropeway.jpg";
import textile from "../../assets/textile.jpg";
import windmill from "../../assets/windmill.jpg";
import PageHeader from "@/partials/PageHeader";

export default function Application() {
  const sectionArray = [
    { icon: aerospace, label: "Aerospace" },
    { icon: agriculture, label: "Agriculture" },
    { icon: airCompressor, label: "Air Compressor" },
    { icon: automobile, label: "Automobile" },
    { icon: automotive, label: "Automotive" },
    { icon: bearing, label: "Bearing" },
    { icon: construction, label: "Construction" },
    { icon: defence, label: "Defence" },
    { icon: fertilizer, label: "Fertilizer" },
    { icon: fireFighting, label: "Fire Fighting" },
    { icon: foodProcessing, label: "Food Processing" },
    { icon: gearTransmission, label: "Gear Transmission" },
    { icon: industrial, label: "Industrial" },
    { icon: marine, label: "Marine" },
    { icon: nuclearPower, label: "Nuclear Power" },
    { icon: oilField, label: "Oil Field" },
    { icon: pharmaceutical, label: "Pharmaceutical" },
    { icon: pipeFittings, label: "Pipe Fittings" },
    { icon: powerEnergy, label: "Power Energy" },
    { icon: pumpValve, label: "Pump Valve" },
    { icon: railway, label: "Railway" },
    { icon: ropeway, label: "Ropeway" },
    { icon: textile, label: "Textile" },
    { icon: windmill, label: "Windmill" },
  ];

  return (
    <>
      <PageHeader title="Application" />
      <h2 className="text-neutral-700 font-normal mx-auto text-center justify-center mt-24">
        Industry We Serve
      </h2>
      <div className="text-center w-full mx-auto justify-center">
        <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />
        <p className="max-w-[55%] text-justify mx-auto mb-4 tracking-wide leading-9">
          Our product application harnesses the power of forging technology to
          revolutionize various industries. From automotive components that
          ensure safety and performance to aerospace parts that withstand
          extreme conditions, our forging solutions deliver unmatched strength
          and durability. With applications ranging from oil and gas exploration
          to construction equipment, our products play a pivotal role in
          enhancing performance and reliability across a diverse spectrum of
          industries.
        </p>
      </div>

      <div className="row max-w-[85%] mx-auto mb-28">
        {sectionArray.map((el, index) => (
          <div
            className="xl:col-2 lg:col-3 md:col-4 sm:col-6 col-6 mt-2"
            key={index}
          >
            <div className="mt-5">
              <Image src={el.icon} alt="imgName" width={200} />
              <div className="mt-2.5">
                <p className="text-center">{el.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
