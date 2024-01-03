import React from "react";
import Image from "next/image";
import Join from "./Join";

import banner1 from "../public/images/banner1.webp";
import bg from "../public/images/image.webp";
import banner2 from "../public/images/banner2.webp";

const Landing = () => {
  return (
    <div className="w-full relative grid grid-rows-[1fr, 1fr] pt-5 gap-6 pb-20 justify-items-center xl:grid-cols-[1fr,24rem,1fr] xl:grid-rows-none md:pt-40">
      <Image
        src={bg}
        alt="background"
        className="object-cover"
        fill={true}
        priority={true}
      />

      <Image
        src={banner1}
        alt="lego person"
        className="z-10 my-auto object-contain xl:justify-self-end"
        height={275}
        placeholder="blur"
      />

      <div className="z-10 grid grid-rows-3 gap-6 max-w-[60%] xl:max-w-none">
        <div className="relative w-[250px] h-full flex justify-center align-middle m-auto">
          <Image
            src="/images/banner2.svg"
            alt="lego person"
            className="z-10 m-auto"
            fill={true}
          />
        </div>

        <div className="text-center justify-center">
          Become a member and link your LEGO® and Epic Games accounts to unlock
          a special Explorer Emilie Fortnite Outfit and LEGO® avatar Outfit.
        </div>
        <div className="flex justify-center align-middle">
          <Join isCTA={true} />
        </div>
      </div>

      <Image
        src={banner2}
        alt="lego person"
        className="hidden z-10 my-auto object-contain justify-self-start max-w-96 xl:block"
        height={275}
      />
    </div>
  );
};

export default Landing;
