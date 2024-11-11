import React from "react";

// import { cn } from "../../../../../utils/lib/cn";

const Progress = () => {
  const percent = 20;
  const baseClasses = "w-[calc(" + percent;
  
  const setdynamic = (value ) => { 
    return 'w-[calc('+value+'%)]'
  }
  const baseClasses22 = "%)]";
 
  const baseClasses33 = setdynamic('65');
  
  return (
    <>
      <div className="mb-1 text-base font-medium dark:text-white">Dark</div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-gray-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        ></div>
      </div>

      <div className="my-1 mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
        Blue
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        ></div>
      </div>

      <div className="my-1 mb-1 text-base font-medium text-rose-700 dark:text-rose-500">
        Red
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-rose-600 text-xs font-medium text-rose-100 text-center p-0.5 leading-none rounded-full"
        ></div>
      </div>

      <div className="my-1 mb-1 text-base font-medium text-lime-700 dark:text-lime-500">
        Lime
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-lime-600 text-xs font-medium text-lime-100 text-center p-0.5 leading-none rounded-full"
        ></div>
      </div>
      <div className="my-1 mb-1 text-base font-medium text-orange-700 dark:text-orange-500">
        Orange
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-orange-600 text-xs font-medium text-orange-100 text-center p-0.5 leading-none rounded-full"
        ></div>
      </div>
      <div className="my-1 mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
        Indigo
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: `${45}%` }}
          className="bg-indigo-600 text-xs font-medium text-indigo-100 text-center p-0.5 leading-none rounded-full w-[calc(25%)]"
        ></div>
      </div>
      <div className="my-1 mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
        Purple
      </div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`bg-purple-600 text-xs font-medium text-purple-100 text-center p-0.5 leading-none rounded-full ${baseClasses33}`}
          //   className={`${sss} ${baseClasses33}`}
        ></div>
      </div>
    </>
  );
};

export default Progress;
