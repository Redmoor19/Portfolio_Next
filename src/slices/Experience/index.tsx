import Tabs from "@/components/Tabs";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  const { experience } = slice.primary;

  return (
    <section
      id="experience"
      className="bg-slate-800 py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h2 className="text-slate-100 text-4xl pb-14 text-center font-lexend">
          Experience
        </h2>
        <div className=" flex items-center justify-center">
          <Tabs experience={experience} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
