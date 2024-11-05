import React, { useEffect } from "react";

// import ReactCountryFlag from "react-country-flag";

import { useTranslation } from "react-i18next";
import useAppStore from "../../../app/stores/AppStore.js";

const Languages = () => {
  const { t } = useTranslation();

  const languageList = [
    { id: "fa", flag: "IR", dir: "rtl", name: t("persion") },
    { id: "en", flag: "GB", dir: "ltr", name: t("english") },
  ];

    const {setLanguageApp}  = useAppStore((state) => ({
      setLanguageApp: state.setLanguageApp,
    }));

  return (
    <>
      <label htmlFor="states" className="sr-only">
        Language
      </label>
      <select
        onChange={() => setLanguageApp("fa", "rtl")}
        id="states"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {languageList?.map((row, index) =>
          index === 0 ? (
            <option key={index} defaultValue>
              {row.name}
            </option>
          ) : (
            <option key={index}>{row.name}</option>
          )
        )}
      </select>
    </>
  );
}

export default Languages;
