import React from "react";
import Link from "next/link";

import MaxWidthWrapper from "./maxWidthWrapper";
import TubeNoteLogo from "./tubenoteLogo";

function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-slate-50 backdrop-blur-lg transition-all">
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

          <Link
            href="/signup"
            className="border-black-700 text-black-700 hover:bg-black-700 hover:text-tan-400 active:bg-black-600 active:text-tan-400 group inline-flex h-3/4 cursor-pointer items-center justify-center gap-4 rounded-full border bg-transparent px-8 font-mono uppercase tracking-[0.01em] transition-colors delay-75"
          >
            Sign up
          </Link>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
}

export default Navbar;
