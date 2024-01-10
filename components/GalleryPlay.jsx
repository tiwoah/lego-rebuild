"use client";

import React from "react";

import divider from "../public/images/divider.svg";

import GalleryNavgiation from "./GalleryNavgiation";
import GalleryPlayCard from "./GalleryPlayCard";
import GalleryPlayCardCTA from "./GalleryPlayCardCTA";

const GalleryPlay = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="h-[40px] w-full bg-repeat-x -mt-[40px] bg-gradient-to-r from-white to-blue-200"
        style={{
          WebkitMaskImage: `url(${divider.src})`,
          maskImage: `url(${divider.src})`,
          maskRepeat: "repeat-x",
        }}
      ></div>
      <div className="w-full px-20 bg-gradient-to-r from-white to-blue-200 ">
        <GalleryNavgiation />
      </div>

      <div className="w-full h-full px-20 bg-gradient-to-r from-white to-blue-200 flex justify-center">
        <div className="w-full h-full max-w-[85rem] pt-32 grid grid-cols-1 gap-7 pb-40 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-7 mt-6">
            <GalleryPlayCard />
            <GalleryPlayCard />
          </div>
          <div className="flex flex-col gap-7">
            <GalleryPlayCardCTA />
            <GalleryPlayCard />
          </div>
          <div className="flex flex-col gap-7 mt-2">
            <GalleryPlayCard />
            <GalleryPlayCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPlay;
