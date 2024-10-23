"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

const Scroll = () => {
  const [isOver, setIsOver] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      className="w-32 h-40 flex items-center justify-center"
    >
      {!isOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DotLottieReact
            className="h-32"
            src="/icons/scroll.lottie"
            loop
            autoplay
          />
        </motion.div>
      )}
      {isOver && (
        <motion.a
          className="text-white text-center flex w-full h-full flex-col items-center justify-center"
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl">Learn more</span>
          <ChevronsDown size={40} />
        </motion.a>
      )}
    </div>
  );
};

export default Scroll;
