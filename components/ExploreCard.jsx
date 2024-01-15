import Image from "next/image";
import React from "react";

const ExploreCard = ({ logoImg, characterImg, bgImg, bgColor, title }) => {
  return (
    <div className={`relative w-64 h-[26rem] rounded-2xl shrink-0 ${bgColor}`}>
      {bgImg && (
        <div className="absolute w-full h-full top-0 left-0 rounded-2xl overflow-hidden">
          <Image
            fill={true}
            src={bgImg}
            className="object-cover"
            alt="background"
            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
          />
        </div>
      )}

      <div className="relative w-[85%] h-28 mt-8 mx-auto">
        <Image
          fill={true}
          src={logoImg}
          className="object-contain z-20"
          alt={title}
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
        />
      </div>

      <div className="absolute w-full h-4/5 -bottom-10">
        <Image
          fill={true}
          src={characterImg}
          className="object-cover z-10"
          alt="character"
          sizes="(max-width: 768px) 10vw, (max-width: 1200px) 20vw, 15vw"
        />
      </div>
    </div>
  );
};

export default ExploreCard;
