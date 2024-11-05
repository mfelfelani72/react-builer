import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Languages from "./components/Language.jsx";

function handleSwitchTheme(setThemeStatus) {
  if (document.documentElement.classList.value) {
    localStorage.setItem("theme", "light");
    setThemeStatus("light");
  } else {
    localStorage.setItem("theme", "dark");
    setThemeStatus("dark");
  }

  document.documentElement.classList.toggle("dark");
}

export default function Landing() {
  const { t } = useTranslation();

  const [themeStatus, setThemeStatus] = useState(localStorage.getItem("theme"));

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-full w-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 ">
            <div className="flex">
              <label className="inline-flex items-center cursor-pointer px-3">
                {themeStatus === "dark" ? (
                  <input
                    type="checkbox"
                    onClick={() => handleSwitchTheme(setThemeStatus)}
                    defaultChecked
                    className="sr-only peer"
                  />
                ) : (
                  <input
                    type="checkbox"
                    onClick={() => handleSwitchTheme(setThemeStatus)}
                    className="sr-only peer"
                  />
                )}

                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t(themeStatus)}
                </span>
              </label>

              <Languages />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                {t("text")}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
