import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="pb-2">Default sticky banner</h2>

        <div
          id="sticky-banner"
          tabIndex="-1"
          className="fixed z-20 flex  justify-between p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
        >
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                </svg>
                <span className="sr-only">Light bulb</span>
              </span>
              <span>
                New brand identity has been launched for the{" "}
                <a
                  href="https://flowbite.com"
                  className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
                >
                  Flowbite Library
                </a>
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                document
                  .getElementById("sticky-banner")
                  .classList.add("hidden");
              }}
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>

        <h2 className="pt-20 pb-2">Marketing CTA banner</h2>
        
        <div
          id="marketing-banner"
          tabIndex="-1"
          className="fixed z-20 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] md:w-[calc(100%-20rem)] p-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl ltr:md:ml-28 rtl:md:mr-28 ltr:left-1/2 rtl:right-1/2 dark:bg-gray-700 dark:border-gray-600"
        >
          <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
               className="h-full w-full me-2"
                alt="Flowbite Logo"
                loading="lazy"
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              Build websites even faster with components on top of Tailwind CSS
            </p>
          </div>
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </a>
            <button
              onClick={() => {
                document
                  .getElementById("marketing-banner")
                  .classList.add("hidden");
              }}
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 text-sm" aria-label="more">
        <a target="_blank" href="https://flowbite.com/docs/components/banner/">For more ...</a>
      </div>
    </>
  );
};

export default Banner;
