import React from "react";
import Link from "next/link";

function Button() {
  return (
    <Link href="/videos/search">
      <button className="learn-more" type="button">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Get Started</span>
      </button>
    </Link>
  );
}

export default Button;
