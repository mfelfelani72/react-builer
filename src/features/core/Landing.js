import React, { lazy } from "react";

const Header = lazy(() => import("./Header.js"));
const Sidebar = lazy(() => import("./Sidebar.js"));
const Content = lazy(() => import("./Content.js"));

const Landing = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
};

export default Landing;
