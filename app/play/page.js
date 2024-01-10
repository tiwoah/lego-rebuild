import React from "react";
import GalleryPlay from "@/components/GalleryPlay";
import Landing from "@/components/Landing";
import Videos from "@/components/Videos";
import MoreToExplore from "@/components/MoreToExplore";

const page = () => {
  return (
    <>
      <Landing />
      <GalleryPlay />
      <Videos />
      <MoreToExplore />
    </>
  );
};

export default page;
