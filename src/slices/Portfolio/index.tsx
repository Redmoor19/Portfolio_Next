import PortfolioCard from "@/components/PortfolioCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  const { projects } = slice.primary;

  return (
    <section
      id="portfolio"
      className=" bg-slate-800 py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h2 className="text-slate-100 text-4xl pb-7 text-center font-lexend">
          Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {projects.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
