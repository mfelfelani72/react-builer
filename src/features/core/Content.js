import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// flowbite
const LazyAccordion = lazy(() =>
  import("../core/components/flowbite/Accordion.jsx")
);

const LazyAlerts = lazy(() =>
  import("../core/components/flowbite/Alerts.jsx")
);

const LazyBadge = lazy(() =>
  import("../core/components/flowbite/Badge.jsx")
);
const LazyBanner = lazy(() =>
  import("../core/components/flowbite/Banner.jsx")
);
// flowbite

const Content = () => {
  return (
    <div className="pt-24 p-4 ltr:md:ml-64 rtl:md:mr-64">
      <Routes>
        <Route path="/" element={<LazyAccordion />}></Route>

        {/* flowbite */}
        <Route path="/flowbit/accordion" element={<LazyAccordion />}></Route>
        <Route path="/flowbit/alerts" element={<LazyAlerts />}></Route>
        <Route path="/flowbit/banner" element={<LazyBanner />}></Route>
        {/* flowbite */}
        
      </Routes>
    </div>
  );
};

export default Content;
