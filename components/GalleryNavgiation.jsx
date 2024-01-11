import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const GalleryNavgiation = () => {
  const pathname = usePathname();
  const items = [
    {
      text: "Discover",
      url: "/discover",
      image: "images/photo.svg",
      alt: "heart",
    },
    {
      text: "Play",
      url: "/play",
      image: "images/games-hollow.svg",
      alt: "heart",
    },
    {
      text: "Create",
      url: "/create",
      image: "images/lego.svg",
      alt: "heart",
    },
  ];

  return (
    <nav className="w-full max-w-[85rem] mx-auto h-fit pt-20 flex flex-row gap-1">
      {items.map((item, i) => (
        <Link href={item.url} key={item.url} scroll={false} className="h-fit">
          <button
            className={`${
              pathname === item.url
                ? "bg-blue-500 text-white"
                : "bg-transparent hover:bg-black/30"
            }  rounded-[0.75rem] p-3 font-semibold flex flex-nowrap gap-2 items-center ${
              pathname === items[1].url ? "text-black" : "text-white"
            } `}
          >
            <Image
              alt={item.alt}
              src={item.image}
              width={20}
              height={20}
              className={`${
                pathname === items[1].url && pathname !== item.url
                  ? ""
                  : "invert"
              }`}
            />
            <div>{item.text}</div>
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default GalleryNavgiation;
