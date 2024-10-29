"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

/**
 * Props for `Parallax`.
 */
export type ParallaxProps = SliceComponentProps<Content.ParallaxSlice>;

/**
 * Component for "Parallax" Slices.
 */
const Parallax = ({ slice }: ParallaxProps): JSX.Element => {
  const { image } = slice.primary;

  if (!image.url) return <></>;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ParallaxBanner className="h-40" style={{ aspectRatio: "16 / 9" }}>
        <ParallaxBannerLayer image={image.url} speed={-20} />
      </ParallaxBanner>
    </section>
  );
};

export default Parallax;
