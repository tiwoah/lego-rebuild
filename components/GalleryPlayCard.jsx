import Link from "next/link";
import React from "react";

const GalleryPlayCard = () => {
  return (
    <Link
      href=""
      scroll={false}
      className="bg-white w-full h-[330px] rounded-2xl drop-shadow-[-0px_6px_6px_rgba(0,0,0,0.4)] transform transition duration-300 hover:scale-[102%] overflow-hidden"
    >
      <article className="w-full h-full">
        <div className="bg-white w-full h-full rounded-2xl flex flex-col">
          <div className="w-full h-[65%] bg-gray-200 rounded-t-2xl"></div>
          <div className="w-full h-fit p-5 text-left whitespace-wrap pb-1">
            Title
          </div>
          <div className="p-5 pt-1">
            <div className="p-2 bg-gray-300 w-fit h-fit rounded-xl font-bold text-[0.8rem] text-gray-800">
              Featured
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default GalleryPlayCard;
