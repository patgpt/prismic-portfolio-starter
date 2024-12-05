
"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  speed?: number;
}

export function Parallax({
  children,
  offset = 50,
  speed = 1000
}: ParallaxProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, speed], [-offset, offset * 4]);

  return (
    <motion.div
      style={{ y }}
      className="absolute -top-20 -bottom-20 left-0 right-0"
    >
      {children}
    </motion.div>
  );
}