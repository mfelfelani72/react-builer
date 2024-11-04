import React, {lazy } from "react";

const Landing = lazy(() => import("../../../features/core/Landing.js"));

const App = () => {

  console.log("sads")
 
  return <Landing />;
};

export default App;
