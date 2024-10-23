import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as motion from "framer-motion/client";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  const { photo, title, subtitle, description } = slice.primary;

  return (
    <section
      id="about"
      className="py-20 bg-slate-800 overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container flex flex-col-reverse h-full xl:grid grid-cols-[4fr_2fr] gap-16 justify-center items-center">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-5 text-center xl:text-left"
        >
          <h2 className="text-4xl font-lexend text-slate-50">{title}</h2>
          <h3 className="text-2xl font-lexend text-slate-100">{subtitle}</h3>
          <div className="font-grotesk text-slate-200">
            <PrismicRichText field={description} />
          </div>
        </motion.div>
        <motion.img
          initial={{ x: 300, scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square rounded-full w-2/3 md:w-1/3 xl:w-full"
          src={photo.url ? photo.url : "/images/default_photo.jpg"}
        />
      </div>
    </section>
  );
};

export default About;
