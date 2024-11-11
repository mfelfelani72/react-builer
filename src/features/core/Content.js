import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer.js";

// flowbite
const LazyAccordion = lazy(() =>
  import("../core/components/flowbite/Accordion.jsx")
);

const LazyAlerts = lazy(() => import("../core/components/flowbite/Alerts.jsx"));

const LazyBadge = lazy(() => import("../core/components/flowbite/Badge.jsx"));
const LazyBanner = lazy(() => import("../core/components/flowbite/Banner.jsx"));
const LazyBottomNavigation = lazy(() =>
  import("../core/components/flowbite/BottomNavigation.jsx")
);
const LazyBreadcrump = lazy(() =>
  import("../core/components/flowbite/Breadcrump.jsx")
);
const LazyButtons = lazy(() =>
  import("../core/components/flowbite/Buttons.jsx")
);
const LazyClipboard = lazy(() =>
  import("../core/components/flowbite/Clipboard.jsx")
);
const LazyModal = lazy(() => import("../core/components/flowbite/Modal.jsx"));
const LazyDrawer = lazy(() => import("../core/components/flowbite/Drawer.jsx"));
const LazyPagination = lazy(() => import("../core/components/flowbite/Pagination.jsx"));
const LazyPopover = lazy(() => import("../core/components/flowbite/Popover.jsx"));
const LazyProgress = lazy(() => import("../core/components/flowbite/Progress.jsx"));
// flowbite

const Content = () => {
  return (
    <div className="pt-24 p-4 bg-white dark:bg-slate-500 h-[calc(100vh-2.5rem)] ltr:md:ml-64 rtl:md:mr-64">
      <Routes>
        <Route path="/" element={<LazyAccordion />}></Route>

        {/* flowbite */}
        <Route path="/flowbit/accordion" element={<LazyAccordion />}></Route>
        <Route path="/flowbit/alerts" element={<LazyAlerts />}></Route>
        <Route path="/flowbit/badge" element={<LazyBadge />}></Route>
        <Route path="/flowbit/banner" element={<LazyBanner />}></Route>
        <Route
          path="/flowbit/bottom-navigation"
          element={<LazyBottomNavigation />}
        ></Route>
        <Route path="/flowbit/breadcrump" element={<LazyBreadcrump />}></Route>
        <Route path="/flowbit/buttons" element={<LazyButtons />}></Route>
        <Route path="/flowbit/clipboard" element={<LazyClipboard />}></Route>
        <Route path="/flowbit/modal" element={<LazyModal />}></Route>
        <Route path="/flowbit/drawer" element={<LazyDrawer />}></Route>
        <Route path="/flowbit/pagination" element={<LazyPagination />}></Route>
        <Route path="/flowbit/popover" element={<LazyPopover />}></Route>
        <Route path="/flowbit/progress" element={<LazyProgress />}></Route>
        {/* flowbite */}
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default Content;
