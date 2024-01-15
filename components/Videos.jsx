"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import divider2 from "../public/images/divider2.svg";

const videos = [
  {
    text: "LEGO® Fortnite® Gameplay Trailer",
    url: "/video",
    image: "/images/fortnite-video-thumbnail.webp",
    alt: "LEGO® Fortnite® Gameplay Trailer",
    length: "2:03",
  },

  {
    text: "MAKE YOUR OWN GAMING ACCESSORIES",
    url: "/video",
    image: "/images/AID2201129C4GL_Minecraft_VideoDesigner_3_2256x1269.webp",
    alt: "Make your own gaming accessories",
    length: "3:33",
  },
  {
    text: "LET'S GO BANANAS!",
    url: "/video",
    image: "/images/AID2305735P4GL_SuperMario_VideoThumbnail_2256x1269.webp",
    alt: "LET'S GO BANANAS!",
    length: "1:29",
  },
];

let timeLastChange = new Date().getTime();
const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);

  const activeVideo = useRef(null);
  const lastActiveVideo = useRef(null);
  const activeSideVideoRight = useRef(null);
  const activeSideVideoLeft = useRef(null);
  const inactiveSideVideoRight = useRef(null);

  let activeVideoTimeout = null;

  const handleIndexChange = (positive) => {
    let add = positive ? 1 : -1;
    let newIndex = activeIndex + add;
    if (newIndex < 0) {
      newIndex = videos.length - 1;
    } else if (newIndex > videos.length - 1) {
      newIndex = 0;
    }

    const activeSideVideoRightElement = activeSideVideoRight.current;
    const activeSideVideoLeftElement = activeSideVideoLeft.current;
    // bad cheap workaround to fix animation bug when spamming arrows
    const newTime = new Date().getTime();
    if (newTime - timeLastChange > 500) {
      setLastActiveIndex(activeIndex);
      setActiveIndex(newIndex);
      timeLastChange = new Date().getTime();
    }
  };

  let fadeOutTimeout = null;

  useEffect(() => {
    const addFadeAnimations = () => {
      const lastVideoElement = lastActiveVideo.current;
      if (lastVideoElement) {
        lastVideoElement.classList.add("animate-fade-out");
        clearTimeout(fadeOutTimeout);
        fadeOutTimeout = setTimeout(() => {
          lastVideoElement.classList.remove("animate-fade-out");
        }, 500);
      }
    };

    addFadeAnimations();
  }, [activeIndex]);

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

      <div className="w-full h-full px-20 bg-gradient-to-r from-rose-700 to-rose-800 flex flex-col items-center">
        <h1 className="text-5xl font-black text-white py-12 w-fit">
          VIDEOS FOR GAMERS
        </h1>

        <div className="relative w-11/12 aspect-square rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl ">
          <div className="relative w-full h-full z-20">
            <div
              className="relative w-full h-full rounded-2xl bg-gray-900 z-20"
              ref={activeVideo}
            >
              <Image
                src={videos[activeIndex].image}
                fill
                className="rounded-2xl object-contain"
                alt={videos[activeIndex].alt}
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
              />

              <div className="flex flex-col absolute bottom-0 w-full p-10 z-10">
                <div className="text-white bg-black/50 rounded-md w-fit p-2 font-bold text-sm">
                  {videos[activeIndex].length}
                </div>
                <div className="w-full flex justify-between align-middle items-center">
                  <h2 className="text-white font-black uppercase text-3xl h-fit max-w-[80%]">
                    {videos[activeIndex].text}
                  </h2>
                  <button className="p-4 rounded-2xl bg-blue-500 text-white font-semibold text-md text-nowrap flex gap-2 flex-nowrap">
                    Watch now
                    <Image
                      src="images/videos.svg"
                      alt="videos"
                      width={24}
                      height={24}
                      className="m-auto"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gray-900 z-20 opacity-0"
              ref={lastActiveVideo}
            >
              <Image
                src={videos[lastActiveIndex].image}
                fill
                className="rounded-2xl object-contain"
                alt={videos[lastActiveIndex].alt}
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 80vw"
              />
              <div className="flex flex-col absolute bottom-0 w-full p-10 z-20">
                <div className="text-white bg-black/50 rounded-md w-fit p-2 font-bold text-sm">
                  {videos[lastActiveIndex].length}
                </div>
                <div className="w-full flex justify-between align-middle items-center">
                  <h2 className="text-white font-black uppercase text-3xl h-fit max-w-[80%]">
                    {videos[lastActiveIndex].text}
                  </h2>
                  <button className="p-4 rounded-2xl bg-blue-500 text-white font-semibold text-md text-nowrap flex gap-2 flex-nowrap">
                    Watch now
                    <Image
                      src="images/videos.svg"
                      alt="videos"
                      width={24}
                      height={24}
                      className="m-auto"
                    />
                  </button>
                </div>
              </div>
            </div>

            <button
              className="bg-white w-14 rounded-xl aspect-square absolute top-1/2 -translate-y-1/2 left flex items-center justify-center -left-52 font-black hover:bg-slate-200"
              onClick={() => handleIndexChange(false)}
            >
              {`<`}
            </button>

            <button
              className="bg-white w-14 rounded-xl aspect-square absolute top-1/2 -translate-y-1/2 left flex items-center justify-center -right-52 font-black hover:bg-slate-200"
              onClick={() => handleIndexChange(true)}
            >
              {`>`}
            </button>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-10">
            <div className="absolute w-full h-full top-0 left-0 z-10">
              <div
                className="w-11/12 aspect-square bg-gray-500 rounded-2xl lg:w-8/12 lg:aspect-video absolute top-1/2 -translate-y-1/2 -left-16 "
                ref={activeSideVideoRight}
              ></div>
              <div
                className="w-11/12 aspect-square bg-gray-500 rounded-2xl lg:w-8/12 lg:aspect-video absolute top-1/2 -translate-y-1/2 -right-[5%] "
                ref={activeSideVideoLeft}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit mt-10 grid grid-cols-[1fr,9rem,1fr] gap-2 pb-20">
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 justify-self-end lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 0 && "scale-[110%] opacity-90"
            }`}
            onClick={() => {
              setLastActiveIndex(activeIndex);
              setActiveIndex(0);
            }}
          >
            <Image
              src={videos[0].image}
              fill
              className="rounded-xl object-contain"
              alt={videos[0].alt}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
            />
          </button>
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 justify-self-center lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 1 && "scale-[110%] opacity-90"
            }`}
            onClick={() => {
              setLastActiveIndex(activeIndex);
              setActiveIndex(1);
            }}
          >
            <Image
              src={videos[1].image}
              fill
              className="rounded-xl object-contain"
              alt={videos[1].alt}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
            />
          </button>
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 2 && "scale-[110%] opacity-90"
            }`}
            onClick={() => {
              setLastActiveIndex(activeIndex);
              setActiveIndex(2);
            }}
          >
            <Image
              src={videos[2].image}
              fill
              className="rounded-xl object-contain"
              alt={videos[2].alt}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
