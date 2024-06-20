import React from "react";

import { Button } from "./button";
import MaxWidthWrapper from "./maxWidthWrapper";
import TubeNoteLogo from "./tubenoteLogo";

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between">
          <TubeNoteLogo />

          <Button href="/dashboard" size="md">
            Get Started
          </Button>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}

export default Navbar;
