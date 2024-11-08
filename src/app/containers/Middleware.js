import React, { lazy } from "react";

const Landing = lazy(() => import("../../features/core/Landing.js"));

const Middleware = () => {
  return <Landing />;
};

export default Middleware;
