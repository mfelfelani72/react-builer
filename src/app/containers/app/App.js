import React from "react";

import loadCSS from "../../../../loadCss";

const App = () => {

  loadCSS();

  return (
    <h1 className="text-sm text-center bg-color-black text-white xs:text-black xs:bg-white">
      Hello world!
    </h1>
  );
};

export default App;
