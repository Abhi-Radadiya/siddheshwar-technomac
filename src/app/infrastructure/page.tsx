import PageHeader from "@/partials/PageHeader";
import Image from "next/image";
import React from "react";
import forging from "@/assets/hammer.jpg";
import laboratory from "@/assets/laboratory.jpg";
import vmc from "@/assets/vmc.png";
import furnace from "@/assets/furnace.jpg";
import mechanic from "@/assets/machinig.jpg";
import diaImage from "@/assets/industrialDie.jpg";

export default function page() {
  return (
    <>
      <section className="">
        <PageHeader title="Infrastructure" />
        <div className="text-center w-full mx-auto justify-center mb-4 pt-24 pb-10 max-w-[80%] mdN:max-w-full">
          <h2 className="text-neutral-700 font-normal">
            Infrastructure Excellence Hub
          </h2>

          <div className="h-1.5 w-[300px] bg-black flex mx-auto mt-2 mb-10" />

          <p className="max-w-[55%] text-justify mx-auto tracking-wide leading-9 mb-12 lgN:max-w-[85%]">
            At Siddheshwar Technoforge, our comprehensive infrastructure
            includes a cutting-edge laboratory, advanced tooling shop,
            state-of-the-art forging facility, and a precision machine shop.
            This integrated setup ensures seamless processes and superior
            quality throughout our manufacturing journey.
          </p>
        </div>
        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex mdN:pb-3 mdN:pt-6">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row justify-between mx-auto mdN:flex-col">
              <div className="mb-10">
                <Image
                  src={forging}
                  alt=""
                  className="rounded-tr-[40px] rounded-bl-[40px] mr-10 -ml-10 mdN:mx-0"
                />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2 flex flex-col">
                  Friction Drop
                  <span className="font-normal text-[30px] mdN:text-2xl">
                    [Hammer - 1.5 MT, 1 MT]
                  </span>
                </h2>

                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10" />

                <p className="mb-6 text-justify">
                  Our commitment to precision forging is exemplified by the
                  installation of our Friction Drop Hammer. This advanced
                  machinery, with a capacity of 1.5 and 1 metric ton, is a
                  cornerstone in our forging facility, offering exceptional
                  efficiency and accuracy in shaping metal components.
                </p>

                <p className="text-justify mb-6">
                  The Friction Drop {`Hammer's`} robust design and controlled
                  impact force enable us to achieve unparalleled precision in
                  the forging process, ensuring the production of high-quality
                  components for diverse industries.
                </p>

                <p className="text-justify">
                  The Friction Drop Hammer stands as a testament to our
                  dedication to cutting-edge technology. Its seamless
                  integration into our facility enhances our forging
                  capabilities, allowing us to meet the stringent demands of
                  clients in sectors such as Agriculture, Railway, and
                  Automotive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex mdN:pb-3">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row-reverse justify-between mx-auto mdN:flex mdN:flex-col">
              <div className="mb-10">
                <Image
                  src={furnace}
                  alt=""
                  width={350}
                  className="rounded-tr-[40px] rounded-bl-[40px] mx-10 mdN:mx-0"
                />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2 flex flex-col">
                  Oil Fired Furnace
                  <span className="font-normal text-[30px] mdN:text-2xl">
                    [Loading Capacity: 5 MT]
                  </span>
                </h2>

                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10" />

                <p className="mb-6 text-justify">
                  We proudly utilize a Fix Industrial Oil Fired Furnace with a
                  substantial material loading capacity of 5 metric tons. This
                  high-performance furnace is a key component of our advanced
                  manufacturing infrastructure, ensuring efficient and precise
                  heating for the forging process. With its robust design and
                  cutting-edge technology, our 5 MT Fix Industrial Oil Fired
                  Furnace plays a crucial role in maintaining optimal
                  temperature conditions, contributing to the production of
                  top-quality forged components across a spectrum of industries.
                </p>

                <p className="text-justify mb-6">
                  Engineered for reliability and efficiency, our Fix Industrial
                  Oil Fired Furnace exemplifies our commitment to delivering
                  superior forging solutions. Its substantial material loading
                  capacity enhances our production capabilities, allowing us to
                  meet the diverse needs of clients in sectors
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex mdN:py-3">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row justify-between mx-auto mdN:flex-col">
              <div className="mb-5">
                <Image
                  src={laboratory}
                  alt=""
                  className="rounded-tr-[40px] rounded-bl-[40px] mr-10 -ml-10 mdN:-ml-0 mdN:mr-0"
                />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2">Laboratory</h2>
                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10 mdN:mb-2" />
                <br />

                <p className="mb-6 text-justify">
                  Our well-equipped laboratory is furnished with cutting-edge
                  tools, including a powerful Microscope with 1000X
                  magnification and Image Analyzer. Complementing our advanced
                  testing capabilities, we employ HRC Tester, Brinell Hardness
                  Tester, and an MPI Machine in-house. These sophisticated
                  instruments empower us to conduct meticulous examinations of
                  material properties, ensuring the highest standards of quality
                  in our forged components. Our laboratory serves as a critical
                  hub for evaluating chemical compositions, inclusion ratings,
                  and mechanical characteristics such as tensile strength, yield
                  strength, elongation, and impact resistance.
                </p>

                <p className="text-justify mb-6">
                  In addition to our in-house testing, we places a premium on
                  external validation. We collaborate with NABL Accredited Labs
                  (National Accreditation Board for Testing and Calibration
                  Laboratories ) to conduct rigorous examinations, including
                  chemical analysis to assess composition and inclusion rating.
                  Furthermore, our mechanical analysis at these external
                  facilities evaluates critical factors like tensile strength,
                  yield strength, elongation, and impact resistance. This dual
                  approach underscores our commitment to delivering precision
                  and reliability in every forged product, meeting or exceeding
                  industry standards
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row-reverse justify-between mx-auto mdN:flex-col">
              <div className="mb-5 ml-12">
                <Image src={vmc} alt="" width={400} />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2">Tooling Shop</h2>
                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10" />
                <p className="mb-6 text-justify">
                  In our Tooling Shop, we boast advanced design capabilities to
                  ensure the highest precision in forging processes. Our expert
                  team employs 2D drafting using {`AutoCAD`} for meticulous
                  planning and visualization. Additionally, we harness the power
                  of
                  {`'Unigraphics NX'`} for comprehensive 3D solid modeling,
                  allowing us to create intricate and accurate designs.
                </p>

                <p className="text-justify mb-6">
                  From the initial concept to the final product, our tooling
                  shop is equipped to handle the full development of forging
                  dies, trimming dies, and punches, demonstrating our commitment
                  to excellence in tooling and design innovation.
                </p>

                <p className="text-justify">
                  Beyond the realm of traditional tooling, our Tooling Shop is a
                  hub of innovation. Our design process is driven by a
                  relentless pursuit of excellence, ensuring that each tool we
                  develop is not just a product but a testament to precision
                  craftsmanship. With an unwavering commitment to pushing the
                  boundaries of design and engineering, our tooling capabilities
                  stand as a cornerstone in our pursuit of delivering forging
                  solutions that redefine industry standards
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex mdN:py-3">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row justify-between mx-auto mdN:flex-col">
              <div className="mb-5">
                <Image
                  src={mechanic}
                  alt=""
                  width={400}
                  className="rounded-tr-[40px] rounded-bl-[40px] -ml-10 mr-10 mdN:-ml-0 mdN:mr-0"
                />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2">Mechanic Shop</h2>
                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10 mdN:mb-3" />
                <br />

                <p className="mb-6 text-justify">
                  In our advanced Machine Shop, we boast a robust production
                  capacity of 1,00,000 pieces per month, showcasing our
                  dedication to meeting high-volume manufacturing demands. Our
                  flexible supply conditions offer components in pre-machined,
                  fully machined, and ready-for-installation states, providing
                  tailored solutions to diverse client needs. Our internal
                  processes encompass turning and milling/drilling, ensuring
                  precision in crafting components to meet the most stringent
                  specifications.
                </p>

                <p className="text-justify mb-6">
                  Equipped with cutting-edge machinery, the Machine Shop
                  features 20 CNC Turning machines, 6 CNC Milling machines
                  (3/4/5 Axis), and 5 Conventional Lathes. This state-of-the-art
                  setup allows us to execute intricate machining processes with
                  efficiency and accuracy. Whether {`it's`} turning for
                  cylindrical components or multi-axis milling for complex
                  geometries, our skilled team leverages the latest technology
                  to deliver superior results. The Machine Shop stands as a
                  testament to our commitment to advanced manufacturing,
                  providing components that consistently meet the highest
                  industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-theme-light py-16 dark:bg-darkmode-theme-light xl:p-20 mx-auto flex">
          <div className="max-w-[80%] flex justify-center mx-auto">
            <div className="items-center flex flex-row-reverse justify-between mx-auto mdN:flex-col">
              <div className="mb-5 ml-12">
                <Image
                  src={diaImage}
                  alt=""
                  width={400}
                  className="rounded-tr-[40px] rounded-bl-[40px] mx-10 mdN:mx-0"
                />
              </div>

              <div className="md:col-7 md:order-1 text-left">
                <h2 className="mb-2">Die Shop</h2>
                <div className="h-1.5 w-[170px] bg-black mt-2 mb-10" />
                <p className="mb-6 text-justify">
                  Our die creation unit is staffed by a team of highly skilled
                  engineers and craftsmen who possess a wealth of experience in
                  tooling and die-making. Leveraging cutting-edge software and
                  manufacturing techniques, they meticulously craft dies that
                  meet the exacting specifications required for forging a wide
                  range of materials.
                </p>

                <p className="text-justify mb-6">
                  Our dedication to quality extends beyond the design phase. We
                  employ the latest machining technologies and premium-grade
                  materials to manufacture dies that can withstand the rigors of
                  high-volume production while maintaining tight tolerances and
                  surface finish requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
