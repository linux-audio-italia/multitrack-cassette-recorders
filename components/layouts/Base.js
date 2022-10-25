import React from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";

const Base = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="SiteMain limit">{children}</main>
      <SiteFooter />
    </>
  );
};

export default Base;
