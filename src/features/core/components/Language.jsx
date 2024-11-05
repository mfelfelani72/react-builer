import React, { useEffect } from "react";

// import ReactCountryFlag from "react-country-flag";

import { useTranslation } from "react-i18next";
import useAppStore from "../../../app/stores/AppStore.js";

const Languages = () => {
  const { t } = useTranslation();

  const languageList = [
    { id: "en", flag: "GB", dir: "ltr", name: t("english") },
    { id: "fa", flag: "IR", dir: "rtl", name: t("persion") },
  ];

  const { setLanguageApp } = useAppStore((state) => ({
    setLanguageApp: state.setLanguageApp,
  }));

  function handleClick(e) {
    const lang = languageList.filter((item) => {
      if (item.id == e.target.value) return item;
    });

    setLanguageApp(lang[0].id, lang[0].dir);
  }

  return (
    <>
      <label htmlFor="states" className="sr-only">
        Language
      </label>
      <select
        onChange={(e) => handleClick(e)}
        id="states"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {languageList?.map((row, index) =>
          index === 0 ? (
            <option key={index} defaultValue value={row.id}>
              {row.name}
            </option>
          ) : (
            <option key={index} value={row.id}>
              {row.name}
            </option>
          )
        )}
      </select>
    </>
  );
};

export default Languages;
