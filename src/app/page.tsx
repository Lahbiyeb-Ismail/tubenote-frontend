import HeroSection from "@/sections/heroSection";
import VideoSearchSection from "@/sections/videoSearchSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-slate-50">
      <HeroSection />
      <VideoSearchSection />
    </main>
  );
}
