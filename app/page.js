import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Landing />
      <Gallery />
    </main>
  );
}
