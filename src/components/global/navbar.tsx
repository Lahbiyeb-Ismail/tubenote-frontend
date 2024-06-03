import React from "react";

import MaxWidthWrapper from "./maxWidthWrapper";
import TubeNoteLogo from "./tubenoteLogo";

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between border-b border-zinc-200">
          <TubeNoteLogo />
          <ul className="flex items-center justify-between space-x-3">
            <li>
              <a href="/about">About</a>
            </li>
            {/* <div className="hidden h-8 w-px bg-zinc-200 sm:block" /> */}
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}

export default Navbar;
