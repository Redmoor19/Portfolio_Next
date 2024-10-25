"use client";
import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const PrlxProvider = ({ children }: { children: ReactNode }) => {
  return <ParallaxProvider scrollAxis="vertical">{children}</ParallaxProvider>;
};

export default PrlxProvider;
