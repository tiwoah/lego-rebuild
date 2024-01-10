import React from "react";

const MoreToExplore = () => {
  return (
    <div className="relative w-full h-full bg-pink-100 pb-12">
      <h1 className="font-black text-slate-800 text-5xl uppercase text-center py-12">
        More To Explore
      </h1>

      <div className="container flex w-10/12 mx-auto flex-wrap gap-4 justify-center ">
        <div className="bg-gray-500 w-64 h-[26rem] rounded-2xl shrink-0"></div>
        <div className="bg-gray-500 w-64 h-[26rem] rounded-2xl shrink-0"></div>
        <div className="bg-gray-500 w-64 h-[26rem] rounded-2xl shrink-0"></div>
        <div className="bg-gray-500 w-64 h-[26rem] rounded-2xl shrink-0"></div>
        <div className="relative outline-purple-500 outline-2 outline w-64 h-[26rem] rounded-2xl shrink-0">
          <button className="p-4 bg-purple-400 text-white rounded-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreToExplore;
