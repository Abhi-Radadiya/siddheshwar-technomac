import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="">
          <div className="bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
            <div className="row items-center justify-between">
              <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
                <ImageFallback
                  className="w-full"
                  src={data.frontmatter.image}
                  width={392}
                  height={390}
                  alt="cta-image"
                />
              </div>
              <div className="md:col-7 md:order-1">
                <h2 className="mb-2">Global Excellence</h2>
                <p className="mb-6">
                  Siddeshwar Technoforge extends its influence globally, leaving
                  an indelible mark on industries worldwide. Our commitment to
                  delivering top-tier forging technology transcends borders,
                  fostering partnerships and driving innovation across
                  continents. With a reputation for unparalleled quality and
                  reliability, Siddeshwar Technoforge is at the forefront of
                  forging a global legacy of excellence.
                </p>
                {data.frontmatter.button.enable && (
                  <Link
                    className="btn btn-primary"
                    href={data.frontmatter.button.link}
                  >
                    {data.frontmatter.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
