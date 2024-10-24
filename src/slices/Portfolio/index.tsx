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
      className="bg-slate-800 py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h2 className="text-slate-100 text-4xl pb-7 text-center font-lexend">
          Portfolio
        </h2>
        <div className="flex flex-col">
          {projects.map((item, i) => (
            <PortfolioCard item={item} key={item.title} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
