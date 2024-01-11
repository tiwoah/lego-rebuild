"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import divider2 from "../public/images/divider2.svg";

const videos = [
  {
    text: "MEET THE UNSTOPPABLE GAMER",
    url: "/video",
    image: "images/heart.svg",
    alt: "LEGO® Fortnite® Gameplay Trailer",
    length: "1:25",
  },
  {
    text: "PLAY UNSTOPPABLE WORKSHOP",
    url: "/video",
    image: "images/heart.svg",
    alt: "LEGO® Fortnite® Gameplay Trailer",
    length: "5:55",
  },
  {
    text: "LEGO® Fortnite® Gameplay Trailer",
    url: "/video",
    image: "images/heart.svg",
    alt: "LEGO® Fortnite® Gameplay Trailer",
    length: "2:03",
  },
];

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
    // if (positive) {
    //   if (activeSideVideoLeftElement) {
    //     activeSideVideoLeftElement.classList.add("animate-enter-right");

    //     clearTimeout(activeVideoTimeout);
    //     activeVideoTimeout = setTimeout(() => {
    //       activeSideVideoLeftElement.classList.remove("animate-enter-right");
    //     }, 500);
    //   }
    // } else {
    //   if (activeSideVideoRightElement) {
    //     activeSideVideoRightElement.classList.add("animate-enter-left");
    //     inactiveSideVideoRight.add("animate-fadeIn");

    //     clearTimeout(activeVideoTimeout);
    //     activeVideoTimeout = setTimeout(() => {
    //       activeSideVideoRightElement.classList.remove("animate-enter-left");
    //     }, 500);
    //   }
    // }

    setLastActiveIndex(activeIndex);
    setActiveIndex(newIndex);
  };

  let fadeInTimeout = null;
  let fadeOutTimeout = null;

  useEffect(() => {
    const addFadeAnimations = () => {
      // const videoElement = activeVideo.current;
      // if (videoElement) {
      //   videoElement.classList.add("animate-fade-in");

      //   clearTimeout(fadeInTimeout);
      //   fadeInTimeout = setTimeout(() => {
      //     videoElement.classList.remove("animate-fade-in");
      //   }, 100);
      // }

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]); // Run the effect when activeIndex changes

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

      <div className="w-full h-full px-20 bg-gradient-to-r from-rose-700 to-rose-800 flex flex-col items-center pb-24">
        <h1 className="text-5xl font-black text-white py-12 w-fit">
          VIDEOS FOR GAMERS
        </h1>

        <div className="relative w-11/12 aspect-square rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl">
          <div
            className="w-full h-full rounded-2xl bg-gray-900 z-20"
            ref={activeVideo}
          >
            <div className="flex flex-col absolute bottom-0 w-full p-10 z-10">
              <div className="text-white bg-black/20 rounded-md w-fit p-2 font-bold text-sm">
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
            <div className="flex flex-col absolute bottom-0 w-full p-10 z-20">
              <div className="text-white bg-black/20 rounded-md w-fit p-2 font-bold text-sm">
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

          <div
            className="w-11/12 aspect-square bg-gray-900/25 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl absolute top-1/2 -translate-y-1/2 -left-28 "
            ref={activeSideVideoRight}
          ></div>
          <div
            className="w-11/12 aspect-square bg-gray-900/25 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl absolute top-1/2 -translate-y-1/2 -right-28 "
            ref={activeSideVideoLeft}
          ></div>

          {/* Fake */}
          <div
            className="w-11/12 aspect-square bg-gray-900/25 rounded-2xl lg:w-8/12 lg:aspect-video lg:max-w-screen-xl absolute top-1/2 -translate-y-1/2 -right-28 "
            ref={inactiveSideVideoRight}
          ></div>
        </div>

        <div className="w-full h-[250px] mt-10 grid grid-cols-[1fr,9rem,1fr] gap-2">
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 justify-self-end lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 0 && "scale-[110%] opacity-90"
            }`}
          ></button>
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 justify-self-center lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 1 && "scale-[110%] opacity-90"
            }`}
          ></button>
          <button
            className={`relative hidden rounded-xl w-36 aspect-video bg-gray-900 opacity-30 lg:block hover:opacity-90 transform transition duration-300 ${
              activeIndex === 2 && "scale-[110%] opacity-90"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
