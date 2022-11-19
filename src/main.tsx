import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DefaultRouter from "./routers/default-router";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { IntlRouterProvider } from "./routers/use-router-intl";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        routes: {
          "route.home": "/",
          "route.createaccount": "/registration",
          "route.login": "/login",
          "route.user.details": "/user/:user",
        },
      },

      pl: {
        routes: {
          "route.home": "/",
          "route.createaccount": "/rejestracja",
          "route.login": "/logowanie",
          "route.user.details": "/szczegoly-uzytkownika/:user",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IntlRouterProvider>
      <DefaultRouter />
    </IntlRouterProvider>
  </React.StrictMode>
);
