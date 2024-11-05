import React, { useEffect, lazy, Suspense } from "react";
import LoaderPage from "../../../features/core/components/LoaderPage.jsx";
import i18n from "../../../../utils/services/i18n";
const Landing = lazy(() => import("../../../features/core/Landing.js"));


const App = () => {
  useEffect(() => {
    // { initial language

    const rootHtml = document.getElementById("root-html");

    if (
      rootHtml &&
      localStorage.getItem("currentLngId") &&
      localStorage.getItem("currentLngDir")
    ) {
      i18n.changeLanguage(localStorage.getItem("currentLngId"));
      rootHtml.setAttribute("dir", localStorage.getItem("currentLngDir"));
    }

    // initial language }

    // { initial theme mode (dark or light)

    if (
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      localStorage.getItem("theme") === "dark"
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // initial theme mode }
  }, []);


  
  return (
    <Suspense fallback={<LoaderPage />}>
      <Landing />
    </Suspense>
  );
};

export default App;
