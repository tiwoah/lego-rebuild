import Gallery from "@/components/GalleryPlay";
import Landing from "@/components/Landing";
import MoreToExplore from "@/components/MoreToExplore";
import Videos from "@/components/Videos";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Gallery />
      <Videos />
      <MoreToExplore />
    </main>
  );
}
