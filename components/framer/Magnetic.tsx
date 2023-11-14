import React, { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setposition] = useState({ x: 0, y: 0 });

  function onmousemove(e: any) {
    const { clientX, clientY } = e;
    const { width, height, top, left } =
      (ref.current as HTMLElement)?.getBoundingClientRect() || {};

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setposition({ x, y });
  }

  function onmouseleave(e: any) {
    setposition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onmousemove}
      onMouseLeave={onmouseleave}
      animate={{ x, y }}
      transition={{type:"spring" , stiffness:150 , damping:15 , mass:.1}}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
