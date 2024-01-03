import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = ({ handleClick }) => {
  const items = [
    {
      text: "LEGO® Digital Safety",
      url: "",
      image: "images/heart.svg",
      alt: "heart",
    },
    {
      text: "LEGO® Life Magazine",
      url: "",
      image: "images/newspaper.svg",
      alt: "magazine",
    },
    { text: "For grown-ups", url: "", image: "images/cake.svg", alt: "cake" },
  ];

  return (
    <div className="absolute bg-white p-2 top-20 origin-center rounded-[0.625rem] flex flex-col gap-1">
      <Image
        src="images/dropdown.svg"
        width={20}
        height={10}
        className="absolute -top-[10px] right-[10px] rotate-180"
        alt="dropdown"
        priority={true}
      />
      {items.map((item, i) => (
        <Link
          href={item.url}
          className="p-2 flex flex-row gap-1 text-sm rounded-[0.625rem] hover:bg-black/5"
          onClick={handleClick}
          key={item.text}
        >
          <Image
            src={item.image}
            width={16}
            height={16}
            className=""
            alt={item.alt}
          />
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
