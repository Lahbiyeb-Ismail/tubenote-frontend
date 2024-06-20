import MaxWidthWrapper from "@/components/global/maxWidthWrapper";
import VideoSearchForm from "@/components/videoSearch/videoSearchForm";

function VideoSearchSection() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center justify-center p-8">
        <h3 className="mb-8 text-center font-mono text-3xl leading-[1.2] tracking-[-0.01em] md:text-[2.75rem] md:leading-[1.1]">
          Unleash the power of TubeNote by entering a YouTube video link below
        </h3>
        <VideoSearchForm />
      </section>
    </MaxWidthWrapper>
  );
}

export default VideoSearchSection;
