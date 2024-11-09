import React, { lazy } from "react";

const Header = lazy(() => import("./Header.js"));
const Content = lazy(() => import("./Content.js"));
const Content2 = lazy(() => import("./Content2.js"));

const Landing = () => {
  return (
    <>
      <Header />
      <Content2 />
    </>
  );
};

export default Landing;
