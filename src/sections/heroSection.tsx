import React from "react";

import Button from "@/components/global/button";
import MaxWidthWrapper from "@/components/global/maxWidthWrapper";

function HeroSection() {
  return (
    <MaxWidthWrapper className="mx-0">
      <section className="flex h-screen flex-col justify-center lg:w-1/2">
        <div className="mb-12">
          <h1 className="mb-6 max-w-4xl font-mono text-4xl font-bold leading-[1.1] tracking-[-0.01em] text-neutral-700 dark:text-white md:text-6xl md:leading-[1.07]">
            Unlock the Power of Video Learning
          </h1>
          <p className="mr-6 text-base leading-tight tracking-normal md:text-[1.25rem] md:leading-normal">
            Unleash your inner note-taking powers with TubeNote - the ultimate
            sidekick for conquering knowledge from the video galaxies.
          </p>
        </div>
        <Button />
      </section>
    </MaxWidthWrapper>
  );
}

export default HeroSection;
