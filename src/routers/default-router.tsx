import { FunctionComponent, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import UserDetails from "../user-details";
import { RouteName } from "./router-helper";
import { useIntlRouter } from "./use-router-intl";

interface DefaultRouterProps {}

const DefaultRouter: FunctionComponent<DefaultRouterProps> = () => {
  const { getRoute } = useIntlRouter();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={getRoute(RouteName.Home)} element={<App />} />
        <Route
          path={getRoute(RouteName.CreateAccount)}
          element={<>Create account</>}
        />
        <Route path={getRoute(RouteName.Login)} element={<>Login</>} />
        <Route
          path={getRoute(RouteName.UserDetails)}
          element={<UserDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default DefaultRouter;
