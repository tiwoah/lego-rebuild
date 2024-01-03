"use client";

import React, { useState } from "react";
import Image from "next/image";
import Join from "./Join";
import Menu from "./Menu";

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <div className="gap-2 flex justify-end">
      <Join isCTA={false} />

      <button
        className="rounded-[0.625rem] bg-purple-600 w-[40px] h-[40px] hover:bg-purple-700"
        onClick={handleClick}
      >
        <Image
          src="images/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="m-auto"
        />
      </button>
      {opened && <Menu handleClick={handleClick} />}
    </div>
  );
};

export default Navigation;
