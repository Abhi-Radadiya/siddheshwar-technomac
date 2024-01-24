import React from "react";

export default function ProductManufacturing() {
  const product = [
    { label: "s", description: "dbhjb jhj sd", image: "sdsd" },
    { label: "s", description: "dbhjb jhj sd", image: "sdsd" },
    { label: "s", description: "dbhjb jhj sd", image: "sdsd" },
    { label: "s", description: "dbhjb jhj sd", image: "sdsd" },
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
            <div
              className="transform rounded-br-[50px] rounded-tl-[50px] h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-110"
              key={index}
            >
              <div className="flex h-full justify-center items-center">
                <span className="font-bold text-gray-500"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
