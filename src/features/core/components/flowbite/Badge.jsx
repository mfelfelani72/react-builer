import React from "react";

const Badge = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="pb-2">Default badge</h2>

        <div className="">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            Default
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Dark
          </span>
          <span className="bg-rose-100 text-rose-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-rose-900 dark:text-rose-300">
            rose
          </span>
          <span className="bg-lime-100 text-lime-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-lime-900 dark:text-lime-300">
            lime
          </span>
        </div>
        <div className="py-1">
          <span className="bg-amber-100 text-amber-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-amber-900 dark:text-amber-300">
            amber
          </span>
          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
            Indigo
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
            Purple
          </span>
          <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
            Pink
          </span>
        </div>

        <h2 className="pt-5 pb-3">Notification badge </h2>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </button>

        <h2 className="pt-5 pb-3">Button with badge </h2>

        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Messages
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            2
          </span>
        </button>
      </div>
    </>
  );
};

export default Badge;
