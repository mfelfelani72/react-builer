import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import LoaderPage from "../../../features/core/components/LoaderPage.jsx";
// const Landing = lazy(() => import("../../../features/core/Landing.js"));

import i18n from "../../../../utils/services/i18n";
import { Landing } from "../../../features/core/Landing.js";

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

  const location = useLocation();
  const { pathname } = location;

  const guestRoutes = ["/"];

  if(guestRoutes.includes(pathname));
  return (
    // <Suspense fallback={<LoaderPage />}>
    <Landing />
    // </Suspense>
  );
};

export default App;
