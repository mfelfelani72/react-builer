import React, { useEffect } from "react";

// import ReactCountryFlag from "react-country-flag";

import { useTranslation } from "react-i18next";
import useAppStore from "../../../app/stores/AppStore.js";

const Languages = () => {
  const { t } = useTranslation();
  const currentLang = localStorage.getItem("currentLngId");

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
      <div className="flex max-w-sm mx-auto">
        <select
          onChange={(e) => handleClick(e)}
          aria-label="countries"
          id="countries"
          className="rtl:!pl-[3rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={currentLang ? currentLang : ""}
        >
          {languageList?.map(
            (row, index) => (
              <option key={index} value={row.id}>
                {row.name}
              </option>
            )
            // )
          )}
        </select>
      </div>
    </>
  );
};

export default Languages;
