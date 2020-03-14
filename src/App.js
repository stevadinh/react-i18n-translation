import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleClick = lang => i18n.changeLanguage(lang);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container-Button">
          <button className="Button" onClick={() => handleClick("en")}>
            Englisch
          </button>
          <button className="Button" onClick={() => handleClick("de")}>
            Deutsch
          </button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("header.intro")}</p>
      </header>
    </div>
  );
}

export default App;
