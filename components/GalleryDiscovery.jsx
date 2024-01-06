"use client";

import React from "react";
import { usePathname } from "next/navigation";

import divider from "../public/images/divider.svg";
import GalleryNavgiation from "./GalleryNavgiation";

const GalleryDiscovery = () => {
  const pathname = usePathname();
  const items = [
    {
      text: "Discover",
      url: "/discover",
      image: "images/heart.svg",
      alt: "heart",
    },
    {
      text: "Play",
      url: "/play",
      image: "images/heart.svg",
      alt: "heart",
    },
    {
      text: "Create",
      url: "/create",
      image: "images/heart.svg",
      alt: "heart",
    },
  ];

  return (
    <div className="relative w-full">
      <div
        className="h-[40px] w-full bg-repeat-x -mt-[40px] bg-gradient-to-r from-rose-700 to-rose-800"
        style={{
          WebkitMaskImage: `url(${divider.src})`,
          maskImage: `url(${divider.src})`,
          maskRepeat: "repeat-x",
        }}
      ></div>
      <div className="w-full h-[800px] bg-gradient-to-r from-rose-700 to-rose-800 ">
        <GalleryNavgiation />
      </div>
      {/* <h1 className="text-center">VIDEOS FOR YOU</h1> */}
    </div>
  );
};

export default GalleryDiscovery;
