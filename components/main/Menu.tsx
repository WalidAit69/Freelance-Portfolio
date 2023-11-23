"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Menu() {
  const [Menu, setMenu] = useState(false);

  return (
    <div
      className="fixed top-0 z-[50] mt-5 right-10 text-white"
      onClick={() => setMenu(!Menu)}
    >
      <div className="h-10 w-24 rounded-[25px] uppercase overflow-hidden relative">
        <motion.div
          className="w-full h-full relative"
          animate={{ top: Menu ? "-100%" : "0" }}
          transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
        >
          <div className="bg-indigo-500 w-full h-full cursor-pointer">
            <PerspectiveText label="menu" />
          </div>

          <div className="bg-gray-800 w-full h-full cursor-pointer absolute top-full">
            <PerspectiveText label="close" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className="w-full h-full flex items-center justify-center PerspectiveText">
      <p>{label}</p>
      <p className="absolute rotateminus hover:-translate-y-full">{label}</p>
    </div>
  );
};

export default Menu;
