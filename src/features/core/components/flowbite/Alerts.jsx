import React from "react";

const Alerts = () => {
  return (
    <>
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a info alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          More info about this info alert goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="me-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            onClick={() => {
              document
                .getElementById("alert-additional-content-1")
                .classList.add("hidden");
            }}
            type="button"
            className="text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800"
          >
            Dismiss
          </button>
        </div>
      </div>
      <div
        id="alert-additional-content-2"
        className="p-4 mb-4 text-rose-800 border border-rose-300 rounded-lg bg-rose-50 dark:bg-gray-800 dark:text-rose-400 dark:border-rose-800"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a danger alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          More info about this info danger goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-rose-800 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
          >
            <svg
              className="me-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            onClick={() => {
              document
                .getElementById("alert-additional-content-2")
                .classList.add("hidden");
            }}
            type="button"
            className="text-rose-800 bg-transparent border border-rose-800 hover:bg-rose-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-rose-600 dark:border-rose-600 dark:text-rose-500 dark:hover:text-white dark:focus:ring-rose-800"
          >
            Dismiss
          </button>
        </div>
      </div>
      <div
        id="alert-additional-content-3"
        className="p-4 mb-4 text-lime-800 border border-lime-300 rounded-lg bg-lime-50 dark:bg-gray-800 dark:text-lime-400 dark:border-lime-800"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a success alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          More info about this info success goes here. This example text is
          going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-lime-800 hover:bg-lime-900 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            <svg
              className="me-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            onClick={() => {
              document
                .getElementById("alert-additional-content-3")
                .classList.add("hidden");
            }}
            type="button"
            className="text-lime-800 bg-transparent border border-lime-800 hover:bg-lime-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-lime-600 dark:border-lime-600 dark:text-lime-400 dark:hover:text-white dark:focus:ring-lime-800"
          >
            Dismiss
          </button>
        </div>
      </div>
      <div
        id="alert-additional-content-4"
        className="p-4 mb-4 text-amber-800 border border-amber-300 rounded-lg bg-amber-50 dark:bg-gray-800 dark:text-amber-300 dark:border-amber-800"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a warning alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          More info about this info warning goes here. This example text is
          going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-amber-800 hover:bg-amber-900 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-amber-300 dark:text-gray-800 dark:hover:bg-amber-400 dark:focus:ring-amber-800"
          >
            <svg
              className="me-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            onClick={() => {
              document
                .getElementById("alert-additional-content-4")
                .classList.add("hidden");
            }}
            type="button"
            className="text-amber-800 bg-transparent border border-amber-800 hover:bg-amber-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-amber-300 dark:border-amber-300 dark:text-amber-300 dark:hover:text-gray-800 dark:focus:ring-amber-800"
          >
            Dismiss
          </button>
        </div>
      </div>
      <div
        id="alert-additional-content-5"
        className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
            This is a dark alert
          </h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-gray-800 dark:text-gray-300">
          More info about this info dark goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800"
          >
            <svg
              className="me-2 h-3 w-3 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            onClick={() => {
              document
                .getElementById("alert-additional-content-5")
                .classList.add("hidden");
            }}
            type="button"
            className="text-gray-800 bg-transparent border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            Dismiss
          </button>
        </div>
      </div>
    </>
  );
};

export default Alerts;
