"use client";

import React from "react";

import divider from "../public/images/divider.svg";
import GalleryNavgiation from "./GalleryNavgiation";
import GalleryPlayCard from "./GalleryPlayCard";

const GalleryPlay = () => {
  return (
    <div className="relative w-full">
      <div
        className="h-[40px] w-full bg-repeat-x -mt-[40px] bg-gradient-to-r from-white to-blue-200"
        style={{
          WebkitMaskImage: `url(${divider.src})`,
          maskImage: `url(${divider.src})`,
          maskRepeat: "repeat-x",
        }}
      ></div>
      <div className="w-full bg-gradient-to-r from-white to-blue-200 ">
        <GalleryNavgiation />
      </div>

      <div className="w-full h-[800px] px-40 bg-gradient-to-r from-white to-blue-200">
        <div className="w-full pt-40 grid grid-cols-3 gap-6 ">
          <GalleryPlayCard />
          <GalleryPlayCard />
          <GalleryPlayCard />
          <GalleryPlayCard />
          <GalleryPlayCard />
          <GalleryPlayCard />
        </div>
      </div>
    </div>
  );
};

export default GalleryPlay;
