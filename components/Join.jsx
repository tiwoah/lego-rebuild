import React from "react";
import Image from "next/image";
const Join = ({ isCTA }) => {
  return isCTA ? (
    <button className="rounded-[0.625rem] bg-yellow-400 text-yellow-900 h-fit p-4 py-3 font-bold text-base text-center flex flex-row justify-center align-middle hover:bg-yellow-500">
      <div className="m-auto flex flex-row">
        Join now
        <Image
          src="/images/arrow.svg"
          alt="lego person"
          width={20}
          height={20}
          className="ml-3"
        />
      </div>
    </button>
  ) : (
    <button className="rounded-[0.625rem] bg-yellow-400 text-yellow-900 px-2 font-bold text-sm  hover:bg-yellow-500">
      Join now
    </button>
  );
};

export default Join;
