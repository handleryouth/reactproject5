import React from "react";
import Media from "react-media";

function Navbar() {
  return (
    <div className="navbar-container">
      <Media query="(max-width: 820px)">
        {(matches) => {
          return matches ? (
            <img
              className="background-header"
              src="/images/bg-header-mobile.svg"
              alt="Background Header"
            />
          ) : (
            <img
              className="background-header"
              src="/images/bg-header-desktop.svg"
              alt="Background Header"
            />
          );
        }}
      </Media>
    </div>
  );
}

export default Navbar;
