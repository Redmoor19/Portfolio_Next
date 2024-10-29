"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as motion from "framer-motion/client";
import Scroll from "@/components/Scroll";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { header, subtitle, description } = slice.primary;

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center bg-black"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.img
        src="/images/hero_bg.jpg"
        alt="Hero background"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover z-10 brightness-50"
      />
      <div className="absolute text-center z-20 font-lexend text-primary-foreground space-y-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl px-1"
        >
          {header}
        </motion.h1>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl px-1"
        >
          {subtitle}
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl text-primary-foreground/80 px-1"
        >
          {description}
        </motion.p>
      </div>
      <div className="absolute z-30 bottom-2 flex items-center justify-center">
        <Scroll />
      </div>
    </section>
  );
};

export default Hero;
