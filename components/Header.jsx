import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="hidden fixed w-full justify-items-center items-center mt-6 z-50 md:flex">
      <div className="flex max-w-[100em] mx-auto w-[98%] h-[80px] shadow-xl rounded-2xl backdrop-blur-lg  bg-white/20">
        <div className="py-5 px-8 w-full h-full grid grid-cols-3">
          <Link href="/">
            <Image src="images/logo.svg" alt="logo" width={40} height={40} />
          </Link>
          <Navbar />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
