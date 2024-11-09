import React, { lazy } from "react";

const Header = lazy(() => import("./Header.js"));
const Content = lazy(() => import("./Content.js"));

const Landing = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Landing;
