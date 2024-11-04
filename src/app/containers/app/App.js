import React, { useEffect, lazy } from "react";

import loadCSS from "../../../../loadCSS.js";

const Landing = lazy(() => import("../../../features/core/Landing.js"));
let index = 1;
const App = () => {
  if (index == 1) {
    index = 2;
    // loadCSS();
  }
  return <Landing />;
};

export default App;
