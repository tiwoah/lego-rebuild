import React from "react";

import divider2 from "../public/images/divider2.svg";

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
    </div>
  );
};

export default Videos;
