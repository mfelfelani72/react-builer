import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Languages from "./components/Language.jsx";

const handleSwitchTheme = (setThemeStatus) => {
  if (document.documentElement.classList.value) {
    localStorage.setItem("theme", "light");
    setThemeStatus("light");
  } else {
    localStorage.setItem("theme", "dark");
    setThemeStatus("dark");
  }

  document.documentElement.classList.toggle("dark");
};

const Header = () => {
  const { t } = useTranslation();

  const [themeStatus, setThemeStatus] = useState(localStorage.getItem("theme"));
  return (
    <>
      <nav className="fixed z-50 ltr:md:pl-64 rtl:md:pr-64 w-full bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="flex flew-row">
          <label
            htmlFor="sidebar-toggle"
            className="inline-flex items-center p-2 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
            <span className="px-1 font-semibold">Menu</span>
          </label>

          <div className="w-full flex flex-row-reverse xs:flex-row xs:justify-between p-4">
            
            <a
              href="https://flowbite.com/"
              className="hidden xs:flex items-center  space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-full w-full"
                alt="Flowbite Logo"
                loading="lazy"
              />
              <span className="self-center font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 ">
              <div className="flex">
                <div className="inline-flex items-center px-3">
                  <label className="cursor-pointer">
                    {themeStatus === "dark" ? (
                      <input
                        type="checkbox"
                        defaultChecked="checked"
                        aria-label="themeStatus"
                        className="sr-only peer"
                        value=""
                        onClick={() => handleSwitchTheme(setThemeStatus)}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        aria-label="themeStatus"
                        className="sr-only peer"
                        value=""
                        onClick={() => handleSwitchTheme(setThemeStatus)}
                      />
                    )}
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <span className="inline-flex items-center ltr:pr-3 rtl:pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {t(themeStatus)}
                </span>

                <Languages />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
