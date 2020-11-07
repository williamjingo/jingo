import React from "react";

const sendToCV = () => {
  const url =
    "https://docs.google.com/document/d/e/2PACX-1vS2dIk2Cnpa1Gz6Efu0fQlkyd2-8isoHwNqqHYDMZlP-qwPv59oVPlykwwpbTGHmhsATCE34cT7Hzq-/pub";

  window.open(url, "_blank");
};

const NavBar = () => {
  return (
    <nav className="navigation" style={{ zIndex: 1035 }}>
      <div className="navigation navigation__brand navigation__brand">
        George
      </div>
      <button
        onClick={(e) => sendToCV()}
        className="btn btn-dark btn-lg"
        type="button"
      >
        Download CV
      </button>
    </nav>
  );
};

export default NavBar;
