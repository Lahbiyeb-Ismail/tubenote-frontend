import React from "react";

import { HeroHighlight, Highlight } from "@/components/ui/heroHighlight";

function HeroSection() {
  return (
    <section>
      <HeroHighlight>
        <h1 className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug ">
          Unleash your inner note-taking powers with from the video{" "}
          <Highlight>TubeNote - the ultimate sidekick</Highlight>
          for conquering knowledge galaxies.
        </h1>
      </HeroHighlight>
    </section>
  );
}

export default HeroSection;
