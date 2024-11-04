import React, {lazy } from "react";

const Landing = lazy(() => import("../../../features/core/Landing.js"));

const App = () => {
 
  return <Landing />;
};

export default App;
