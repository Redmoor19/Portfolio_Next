"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-32 h-40 flex items-center justify-center"
    >
      {!isHovered && !isTouchDevice ? (
        <motion.div {...animationProps}>
          <DotLottieReact
            className="h-32"
            src="/icons/scroll.lottie"
            loop
            autoplay
          />
        </motion.div>
      ) : (
        <motion.a
          {...animationProps}
          className="text-white text-center flex w-full h-full flex-col items-center justify-center"
          href="#about"
        >
          <span className="text-xl">Learn more</span>
          <ChevronsDown size={40} />
        </motion.a>
      )}
    </div>
  );
};

export default Scroll;
