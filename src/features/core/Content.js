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
const LazyBottomNavigation = lazy(() =>
  import("../core/components/flowbite/BottomNavigation.jsx")
);
const LazyBreadcrump = lazy(() =>
  import("../core/components/flowbite/Breadcrump.jsx")
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
        <Route path="/flowbit/badge" element={<LazyBadge />}></Route>
        <Route path="/flowbit/banner" element={<LazyBanner />}></Route>
        <Route path="/flowbit/bottom-navigation" element={<LazyBottomNavigation />}></Route>
        <Route path="/flowbit/breadcrump" element={<LazyBreadcrump />}></Route>
        {/* flowbite */}
        
      </Routes>
    </div>
  );
};

export default Content;
