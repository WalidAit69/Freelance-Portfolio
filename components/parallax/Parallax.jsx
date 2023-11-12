'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="w-[100%] h-[100vh] bg-[#030014] relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-6xl z-10 text-center md:text-8xl text-white font-bold">
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="bg-mountains bg-contain bg-no-repeat md:bg-cover bg-bottom w-[100%] h-[100%] 
      absolute z-20"></motion.div>
      <motion.div
        className="bg-contain bg-no-repeat md:bg-cover bg-[#030014] bg-bottom w-[100%] h-[100%] 
        absolute z-[2]"
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"
            })`,
        }}
      ></motion.div>
    </section>
  );
};

export default Parallax;
