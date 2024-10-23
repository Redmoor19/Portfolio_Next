import AdditionalSkills from "@/components/AdditionalSkills";
import SkillsGroup from "@/components/SkillsGroup";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  const { frontend, backend, databases, additional_skills } = slice.primary;
  return (
    <section
      id="skills"
      className="bg-slate-800 py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h2 className="text-slate-100 text-4xl pb-7 text-center font-lexend">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-14 gap-10">
          <SkillsGroup skills={frontend} title="Frontend" />
          <SkillsGroup skills={backend} title="Backend" />
          <SkillsGroup skills={databases} title="Database" />
        </div>
        <div className="h-1 rounded bg-slate-600 my-14" />
        <h2 className="font-lexend text-2xl text-slate-100 text-center">
          Additional skills
        </h2>
        <AdditionalSkills skills={additional_skills} />
      </div>
    </section>
  );
};

export default Skills;
