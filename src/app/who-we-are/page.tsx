import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import siddeshwar_profile from "@/assets/siddeshwar_profile.png";
import Image from "next/image";
import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";
import values from "@/assets/value.png";
import phylisophy from "@/assets/philosophy.png";
import "./style.css";

const page = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  const product = [
    {
      label: "Our Mission",
      description:
        "Excel in precision forging with innovative, sustainable solutions for diverse industry needs",
      image: mission,
    },
    {
      label: "Our Vision",
      description:
        "Global Forging tech leader known for solution, excellence, and customer satisfaction",
      image: vision,
    },
    {
      label: "Core Values",
      description:
        "Precise forging, innovative solutions, and unwavering commitment define our core values",
      image: values,
    },
  ];

  const keyStrength = [
    {
      label: "Precision Manufacturing",
      description:
        "Exceptional expertise in producing precise and high-quality forged components.",
    },

    {
      label: "Innovative Solutions",
      description:
        "Constantly pushing boundaries, providing cutting-edge forging solutions.",
    },

    {
      label: "Customer Centric Approach",
      description:
        "Dedicated to exceeding customer expectations through personalized service and collaboration.",
    },

    {
      label: "State-of-the-Art Infrastructure",
      description:
        "Ultramodern facilities equipped with the latest technology and advanced testing laboratories.",
    },

    {
      label: "Skilled Workforce",
      description:
        "A highly skilled and motivated team driving excellence in every forging project.",
    },

    {
      label: "Diverse Industry Presence",
      description:
        "Proven success across various industries, including Agriculture, Automotive, and Railway.",
    },
  ];

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="">
        <PageHeader title="Who We Are" />

        <div className="text-center w-full mx-auto justify-center mb-4 py-24 max-w-[80%]">
          <h2 className="text-neutral-700 font-normal">Compony profile</h2>

          <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />

          <p className="max-w-[55%] text-justify mx-auto tracking-wide leading-9 mb-12 mdN:max-w-[90%]">
            We take pride in our commitment to excellence and innovation. With a
            rich company profile built on a foundation of integrity and quality,
            we strive to deliver cutting-edge solutions that meet and exceed the
            diverse needs of our clients.
          </p>

          <Image
            src={siddeshwar_profile}
            alt="siddeshwar_profile"
            className="rounded-tr-[12%] rounded-bl-[12%]"
          />
        </div>
      </section>

      <section className="">
        <div className="bg-gradient px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
          <div className="row items-center justify-between">
            <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
              <ImageFallback
                className="rounded-tr-[40px] rounded-bl-[40px] w-full"
                src={phylisophy}
                width={392}
                height={390}
                alt="cta-image"
              />
            </div>
            <div className="md:col-7 md:order-1">
              <h2 className="mb-2">Our Philosophy</h2>

              <div className="h-1.5 w-[150px] bg-black mt-2 mb-10" />

              <p className="mb-6 text-justify leading-9 tracking-wide">
                Established in 2001, Siddheshwar Technoforge stands as a
                pioneering force in the forging industry. Founded by Er. Uttam
                Sorthia, our ultramodern facility, equipped with cutting-edge
                machinery and a comprehensive Testing Laboratory staffed by
                skilled technicians, reflects our unwavering commitment to
                excellence. Catering to diverse sectors, including Agriculture,
                Pipe Fittings, Flanges, Railway, Refinery, and Automobiles. We
                not only prioritize our advanced manufacturing processes but,
                more significantly, take immense pride in the dedication and
                expertise of our valued employees, who form the backbone of our
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[80%] mx-auto">
        <div className="mx-auto w-full gap-12 pb-5 justify-between grid grid-cols-3 place-items-center xlN:grid-cols-2 mdN:grid-cols-1">
          {product.map((el, index) => (
            <div
              className="transform rounded-br-[50px] rounded-tl-[50px] w-60 h-[320px] sm:w-80 bg-white shadow-xl transition duration-300 hover:scale-110 p-5"
              key={index}
            >
              <Image src={el.image} alt="" width={75} className="mt-5" />
              <div className="flex flex-col gap-1.5 mt-6">
                <span className="font-bold text-gray-500 uppercase">
                  {el.label}
                </span>
                <p className="tracking-wide">{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient mb-12">
        <div className="text-center w-full mx-auto justify-center mb-4 pt-20 mt-12 max-w-[80%]">
          <h2 className="text-neutral-700 font-normal">
            Strengths that Define Excellence
          </h2>

          <div className="h-1.5 w-[200px] bg-black flex mx-auto mt-2 mb-10" />
        </div>

        <div className="max-w-[80%] mx-auto lgN:max-w-[90%]">
          <div className="ag-courses_box w-full gap-y-5 grid grid-cols-3 lgN:grid-cols-2 mdN:grid-cols-1">
            {keyStrength.map((el, index) => (
              <div
                className="ag-courses_item my-3 shadow-2xl border-b-2 border-l-2 border-neutral-300 rounded-tr-[28px] rounded-bl-[28px] h-[260px] mx-5"
                key={index}
              >
                <div className="ag-courses-item_link ">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_date-box uppercase font-bold min-h-[60px]">
                    {el.label}
                  </div>

                  <div className="ag-courses-item_title tracking-wider mt-3">
                    {el.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
