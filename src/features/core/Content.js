import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LazyAccordion = lazy(() =>
  import("../core/components/flowbite/Accordion.jsx")
);

const Content = () => {
  return (
    <div className="pt-24 p-4 ltr:md:ml-64 rtl:md:mr-64">
      <Routes>
        <Route path="/" element={<LazyAccordion />}></Route>
        <Route path="/accordion" element={<LazyAccordion />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
