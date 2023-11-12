import Image from "next/image";
import React from "react";

function ImageLoader() {
  return (
    <div className="w-full grid place-items-center" role="status">
      <Image
        width={25}
        height={25}
        src={"/galaxy.png"}
        className="animate-spin"
        alt=""
      />
    </div>
  );
}

export default ImageLoader;
