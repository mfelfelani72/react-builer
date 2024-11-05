import React from "react";
import Loader from "./Loader.jsx";

function LoaderPage() {
  return (
    <div 
    className="h-screen w-screen bg-white flex items-center">
      <div className="container mx-auto">
        <Loader />
      </div>
    </div>
  );
}

export default LoaderPage;
