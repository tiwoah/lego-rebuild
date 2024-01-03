import React from "react";
import Image from "next/image";

import divider from "../public/images/divider.svg";

const Gallery = () => {
  return (
    <div className="relative w-full h-80">
      <div
        className="h-[40px] w-full bg-repeat-x bg-transparent -mt-[40px] "
        style={{
          backgroundImage: `url(${divider.src})`,
        }}
      ></div>

      <div className="grid grid-cols-3 bg-gradient-to-r from-white to-blue-300 h-full">
        <div>yo</div>
        <div>yo</div>
        <div>yo</div>
      </div>
    </div>
  );
};

export default Gallery;
