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
            <GalleryPlayCard
              title="LEGO® Fortnite®"
              imgPath={"/images/fortnite-thumbnail.webp"}
            />
            <GalleryPlayCard
              title="Ready for a dance-off? Let’s go!"
              subtitle="Gaming"
              imgPath={"/images/Friends_CTA_static_promotion_front_page.webp"}
            />
          </div>
          <div className="flex flex-col gap-7">
            <GalleryPlayCardCTA />
            <GalleryPlayCard
              title="Play the NEW Crystalized game!"
              subtitle="Gaming"
              imgPath={"/images/Arcade_Crystalized.webp"}
            />
          </div>
          <div className="flex flex-col gap-7 mt-2">
            <GalleryPlayCard
              title="Unlock new trophies and creative skills with Salina!"
              imgPath={"/images/Salina_Masterclass_Group_Thumbnail.webp"}
            />
            <GalleryPlayCard
              title="NEW GAME: Dive into brick-built worlds to solve Alice's mystery adventure!"
              subtitle="Gaming"
              imgPath={"/images/KeyArt.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPlay;
