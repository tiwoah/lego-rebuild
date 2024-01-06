"use client";

import React from "react";

import divider from "../public/images/divider.svg";
import GalleryNavgiation from "./GalleryNavgiation";

const GalleryCreate = () => {
  return (
    <div className="relative w-full">
      <div
        className="h-[40px] w-full bg-repeat-x -mt-[40px] bg-gradient-to-r from-blue-600 to-blue-900"
        style={{
          WebkitMaskImage: `url(${divider.src})`,
          maskImage: `url(${divider.src})`,
          maskRepeat: "repeat-x",
        }}
      ></div>
      <div className="w-full h-[800px] bg-gradient-to-r from-blue-600 to-blue-900 ">
        <GalleryNavgiation />
      </div>
    </div>
  );
};

export default GalleryCreate;
