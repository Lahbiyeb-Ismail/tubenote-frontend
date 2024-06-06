import MaxWidthWrapper from "@/components/global/maxWidthWrapper";

function VideoSearchSection() {
  return (
    <section className="flex items-center justify-center p-12">
      <MaxWidthWrapper>
        <h3 className="mb-8 text-center font-mono text-3xl leading-[1.2] tracking-[-0.01em] md:text-[2.75rem] md:leading-[1.1]">
          Unleash the power of TubeNote by entering a YouTube video link below
        </h3>
        <form className="flex justify-center">
          <input
            type="text"
            placeholder="Paste a YouTube video link here"
            className="w-full rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-lg leading-6 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
          />
          <button
            type="submit"
            className="ml-4 rounded-md bg-slate-500 px-6 py-2 text-lg font-semibold text-white hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </MaxWidthWrapper>
    </section>
  );
}

export default VideoSearchSection;
