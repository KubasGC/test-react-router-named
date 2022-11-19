import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RouteName } from "./routers/router-helper";
import { useIntlRouter } from "./routers/use-router-intl";

function App() {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation("routes");

  const onLanguageChange = () => {
    const lang = i18n.language;

    if (lang !== "en") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("pl");
    }
  };

  const { getRoute } = useIntlRouter();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <Link to={getRoute(RouteName.Login)}>
            Logowanie ({getRoute(RouteName.Login)})
          </Link>
        </p>
        <p>
          <Link to={getRoute(RouteName.CreateAccount)}>
            Rejestracja ({getRoute(RouteName.CreateAccount)})
          </Link>
        </p>
        <p>
          <Link to={getRoute(RouteName.UserDetails, { userId: "123" })}>
            Szczegóły użytkownika (
            {getRoute(RouteName.UserDetails, { userId: "123" })})
          </Link>
        </p>
        <p>
          <button onClick={onLanguageChange}>Zmień język</button>
        </p>

        <p>Aktualny język: {i18n.language}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
