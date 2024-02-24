import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import ProductManufacturing from "./components/home/ProductManufacturing";
import QualityProcess from "./components/home/QualityProcess";
import Sector from "./components/home/Sector";
import GlobalReach from "./components/home/GlobalReach";
import forging_home from "@/assets/forging_home.jpg";
import SliderSection from "./components/home/SliderSection.js";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  const aboutPoints = [
    "Premier precision engineering for forged components",
    "Tailored solutions for diverse industrial applications",
    "Unmatched quality in every precision-machined component",
    "Transparent partnerships, customer satisfaction at our core",
    "State-of-the-art technology driving innovation in precision engineering",
    "Tradition meets the future in our rich legacy of craftsmanship",
  ];

  const content = [
    { title: "dfhb hed", description: "vnjr jn  j" },
    { title: "dskj kjd  hed", description: "vnjr jn  j" },
    { title: "dfhb vsjn ", description: "vn jsj jr jn  j" },
  ];

  return (
    <>
      <SeoMeta />

      <SliderSection />

      <section>
        {/* <Slider>
          {content.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <div>{article.description}</div>
            </div>
          ))}
        </Slider> */}
      </section>

      <section className="section-sm bg-gradient">
        <div className="container">
          <div className="row items-center justify-between">
            <div className="mb:md-0 mb-6 md:col-5">
              <ImageFallback
                src={forging_home}
                height={480}
                width={520}
                alt=""
                className="rounded-tl-[50px] rounded-br-[50px]"
              />
            </div>
            <div className="md:col-7 lg:col-6">
              <h2 className="mb-4 text-2xl">ABOUT SIDDHESHWAR TECHNO FORGE</h2>
              <p className="mb-8 text-lg">
                We stands at the forefront of precision engineering,
                specializing in the manufacturing of forged and
                precision-machined components. With a relentless commitment to
                quality and innovation, we have established ourselves as a
                trusted name in the industry.
              </p>
              <ul>
                {aboutPoints.map((point, index) => (
                  <li className="relative mb-4 pl-6" key={index}>
                    <FaCheck className={"absolute left-0 top-1.5"} />
                    <span dangerouslySetInnerHTML={markdownify(point)} />
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary mt-5" href="/who-we-are">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductManufacturing />

      <QualityProcess />

      <Sector />

      <GlobalReach />

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
