import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as motion from "framer-motion/client";
import Image from "next/image";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  const { photo, title, subtitle, description, links } = slice.primary;

  return (
    <section
      id="about"
      className="bg-slate-800 py-10"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container min-h-screen flex flex-col-reverse xl:grid grid-cols-[4fr_2fr] gap-16 justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-5 text-center xl:text-left"
        >
          <h2 className="text-4xl font-lexend text-slate-50">{title}</h2>
          <h3 className="text-2xl font-lexend text-slate-100">{subtitle}</h3>
          <div className="font-grotesk text-slate-200">
            <PrismicRichText field={description} />
          </div>
          <ul className="flex gap-7 justify-center xl:justify-start">
            {links.map((link, i) => (
              <li key={i}>
                <PrismicNextLink field={link.link} className="text-slate-100">
                  <Image
                    alt={link.icon.alt ?? ""}
                    src={link.icon.url ?? ""}
                    width={40}
                    height={40}
                  />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.img
          initial={{ scale: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square rounded-full w-2/3 md:w-1/3 xl:w-full"
          alt="avatar"
          src={photo.url ? photo.url : "/images/default_photo.jpg"}
        />
      </div>
    </section>
  );
};

export default About;
