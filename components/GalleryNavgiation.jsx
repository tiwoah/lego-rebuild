import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GalleryNavgiation = () => {
  const pathname = usePathname();
  const items = [
    {
      text: "Discover",
      url: "/discover",
      image: "images/heart.svg",
      alt: "heart",
    },
    {
      text: "Play",
      url: "/play",
      image: "images/heart.svg",
      alt: "heart",
    },
    {
      text: "Create",
      url: "/create",
      image: "images/heart.svg",
      alt: "heart",
    },
  ];

  return (
    <nav className="w-full h-fit px-40 pt-20 flex flex-row gap-2">
      {items.map((item, i) => (
        <Link href={item.url} key={item.url} scroll={false} className="h-fit">
          <button
            className={`${
              pathname === item.url
                ? "bg-blue-500"
                : "bg-transparent hover:bg-black/40"
            }  rounded-[0.75rem] p-3 font-semibold ${
              pathname === items[1].url ? "text-black" : "text-white"
            } `}
          >
            {item.text}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default GalleryNavgiation;
