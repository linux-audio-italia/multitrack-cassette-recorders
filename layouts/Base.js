import React from "react";

const Base = ({ children }) => {
  return (
    <>
      <header>The header</header>
      <main>{children}</main>
      <footer>The footer</footer>
    </>
  );
};

export default Base;
