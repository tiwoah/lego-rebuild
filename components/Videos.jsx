import React from "react";

import divider2 from "../public/images/divider2.svg";

const videos = [
  {
    text: "LEGO® Fortnite® Gameplay Trailer",
    url: "/video",
    image: "images/heart.svg",
    alt: "LEGO® Fortnite® Gameplay Trailer",
  },
];

const Videos = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="h-[80px] w-full -mt-[80px] bg-gradient-to-r from-rose-700 to-rose-800"
        style={{
          WebkitMaskImage: `url(${divider2.src})`,
          maskImage: `url(${divider2.src})`,
          maskSize: "100% 100%",
        }}
      ></div>

      <div className="w-full h-full px-20 bg-gradient-to-r from-rose-700 to-rose-800 flex flex-col items-center pb-60">
        <h1 className="text-5xl font-black text-white py-12 w-fit">
          VIDEOS FOR GAMERS
        </h1>

        <div className="relative w-11/12 aspect-square bg-gray-900 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl">
          <div className="flex flex-col absolute bottom-0 w-full p-10 z-10">
            <div className="text-white bg-black/20 rounded-md w-fit p-2 font-bold text-sm">
              0:00
            </div>
            <div className="w-full flex justify-between align-middle items-center">
              <h2 className="text-white font-black uppercase text-3xl h-fit max-w-[80%]">
                LEGO® Fortnite® Gameplay Trailer
              </h2>
              <button className="p-4 rounded-2xl bg-blue-500 text-white font-semibold text-md text-nowrap">
                Watch now
              </button>
            </div>
          </div>

          <button className="bg-white w-14 rounded-xl aspect-square absolute top-1/2 -translate-y-1/2 left flex items-center justify-center -left-52 font-black">
            {`<`}
          </button>

          <button className="bg-white w-14 rounded-xl aspect-square absolute top-1/2 -translate-y-1/2 left flex items-center justify-center -right-52 font-black">
            {`>`}
          </button>

          <div className="w-11/12 aspect-square bg-gray-900/25 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl absolute top-1/2 -translate-y-1/2 -left-28"></div>
          <div className="w-11/12 aspect-square bg-gray-900/25 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl absolute top-1/2 -translate-y-1/2 -right-28"></div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
