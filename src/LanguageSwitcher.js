import React, { useContext, useState } from "react";
import I18nContext, { i18n } from "./context/I18nContext";

const LanguageSwitcher = () => {
  const { setI18nData } = useContext(I18nContext);
  const [english, setEnglish] = useState(true);
  return (
    <>
    <div style={{paddingTop: '2em'}}>Current language: {english ? "English" : "German"}.</div>
      <button
        onClick={() => {
          english ? setI18nData(i18n["de"]) : setI18nData(i18n["en"]);
          setEnglish(!english);
        }}
      >
         Change language
      </button>
    </>
  );
};

export default LanguageSwitcher;
