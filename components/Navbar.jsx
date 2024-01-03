import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-x-2 justify-center items-center">
      <Link href="games">
        <button className="rounded-[0.625rem] bg-blue-600 w-[40px] h-[40px] hover:bg-blue-700">
          <Image
            src="images/games.svg"
            alt="games"
            width={24}
            height={24}
            className="m-auto"
          />
        </button>
      </Link>

      <Link href="videos">
        <button className="rounded-[0.625rem] bg-red-600 w-[40px] h-[40px] hover:bg-red-700">
          <Image
            src="images/videos.svg"
            alt="videos"
            width={24}
            height={24}
            className="m-auto"
          />
        </button>
      </Link>

      <Link href="themes">
        <button className="rounded-[0.625rem] bg-green-700 w-[40px] h-[40px] hover:bg-green-800">
          <Image
            src="images/themes.svg"
            alt="themes"
            width={24}
            height={24}
            className="m-auto"
          />
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
