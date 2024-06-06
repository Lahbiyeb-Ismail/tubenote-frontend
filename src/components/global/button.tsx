import React from "react";

function Button() {
  return (
    <button className="learn-more" type="button">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">Get Started</span>
    </button>
  );
}

export default Button;
