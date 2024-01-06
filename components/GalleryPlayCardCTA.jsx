import Link from "next/link";
import React from "react";
import Image from "next/image";
import avatar from "../public/images/minifigure-play.webp";

const GalleryPlayCardCTA = () => {
  return (
    <Link
      href=""
      scroll={false}
      className="w-full h-[500px] md:h-[370px] rounded-2xl drop-shadow-[-0px_6px_6px_rgba(0,0,0,0.4)] transform transition duration-300 hover:scale-[102%] "
    >
      <article className="w-full h-full">
        <div className="w-full h-full rounded-2xl flex flex-col bg-purple-950">
          {/* <div className="w-full h-[100%] bg-gray-200 rounded-t-2xl absolute -top-20"></div> */}

          {/* <div className="absolute w-full h-full rounded-t-2xl bg-[radial-gradient(70.40%_35.00%_at_50%_85.00%,rgba(255,255,255,50.00)_79%,rgba(0,0,0,0.00)_20%)]"></div> */}
          <div className="absolute w-full h-full rounded-t-2xl bg-[radial-gradient(70.00%_35.00%_at_50%_85.00%,rgba(255,30,190,70%),rgba(0,0,0,0%))]" />
          {/* <Image
            src={avatar}
            className="w-full bg-transparent rounded-t-2xl absolute bottom-20"
          /> */}
          <div className="w-[85%] bg-transparent rounded-t-2xl absolute bottom-20 -translate-x-1/2 left-1/2">
            <Image src={avatar} className="" alt="lego minifigure" />
          </div>
          <div className="w-full h-fit p-5 text-center text-white whitespace-wrap pb-1 font-bold text-lg mt-auto mb-8 z-[2]">
            Create your avatar
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GalleryPlayCardCTA;
