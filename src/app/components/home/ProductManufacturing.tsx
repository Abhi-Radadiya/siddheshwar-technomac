import React from "react";
import rotavator from "@/assets/rotavator.jpg";
import pipe from "@/assets/pipe.jpg";
import flang from "@/assets/flang.jpg";
import gears from "@/assets/gears.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ProductManufacturing() {
  const product = [
    {
      label: "Forged Flanges",
      description:
        "Flanges are used to connect valves, pipes, pumps, and other equipment to make a... ",
      image: gears,
    },
    {
      label: "Forged Pipe Fitting",
      description:
        "Pipe fittings are components that help in pipe routing for directional changes a... ",
      image: pipe,
    },
    {
      label: "Forged Gears",
      description:
        "Gears are used in a wide range of mechanical devices, including pumps, wat... ",
      image: flang,
    },
    {
      label: "Forged rotavator",
      description:
        "When it comes to rotavators, we manufacture housing kit, reg flange set, and axle.",
      image: rotavator,
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-stone-300">
        <h2 className="text-2xl flex justify-center pb-4 pt-20">
          PRODUCT WE MANUFACTURE
        </h2>

        <div className="bg-[#000] h-[5px] w-[100px] flex justify-center mx-auto mb-14" />

        <div className="flex flex-row mx-auto w-full gap-12 justify-center pb-40">
          {product.map((el, index) => (
            <Link
              className="transform rounded-br-[50px] rounded-tl-[50px] h-40 w-40 sm:h-[20rem] p-3 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-110 cursor-pointer"
              key={index}
              href="/product"
            >
              <Image src={el.image} alt="" className="mt-1" />

              <div className="justify-center items-center mt-5">
                <span>{el.label}</span>

                <p className="text-gray-500 mt-2">{el.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
