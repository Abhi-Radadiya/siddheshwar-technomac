import PageHeader from "@/partials/PageHeader";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="">
        <PageHeader title="Infrastructure" />

        <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%]">
          <h2 className="text-neutral-700 font-normal">Compony profile</h2>

          <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />

          <p className="max-w-[55%] text-justify mx-auto tracking-wide leading-9 mb-12">
            We take pride in our commitment to excellence and innovation. With a
            rich company profile built on a foundation of integrity and quality,
            we strive to deliver cutting-edge solutions that meet and exceed the
            diverse needs of our clients.
          </p>

          {/* <Image
            src={siddeshwar_profile}
            alt="siddeshwar_profile"
            className="rounded-tr-[12%] rounded-bl-[12%]"
          /> */}
        </div>
      </section>
    </>
  );
}
