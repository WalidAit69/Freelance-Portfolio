'use client'

import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div
      className="w-full grid place-items-center"
      role="status"
    >
      <Image width={30} height={30} src={"/universe.png"} className="animate-spin" alt="" />
    </div>
  );
}

export default Loader;
