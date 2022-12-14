import reactLogo from "./assets/react.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { RouteName } from "./routers/router-helper";
import { useIntlRouter } from "./routers/use-router-intl";
import IntlLink from "./routers/intl-link";

function App() {
  const { i18n } = useTranslation("routes");

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
          <IntlLink to={RouteName.Login}>
            Logowanie ({getRoute(RouteName.Login)})
          </IntlLink>
        </p>
        <p>
          <IntlLink to={RouteName.CreateAccount}>
            Rejestracja ({getRoute(RouteName.CreateAccount)})
          </IntlLink>
        </p>
        <p>
          <IntlLink to={RouteName.UserDetails} args={{ user: "123-Kubas" }}>
            Szczegóły użytkownika (
            {getRoute(RouteName.UserDetails, { user: "123-Kubas" })})
          </IntlLink>
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
