'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  

  return (
    <motion.div
      className="hidden md:visible border rounded-full fixed z-[999] w-[50px] h-[50px]"
      animate={{ x: position.x + 7, y: position.y + 7 }}
      transition={{ type: "tween", ease: "backOut" }}
    ></motion.div>
  );
};

export default Cursor;
