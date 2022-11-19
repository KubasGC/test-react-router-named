import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { RouteName } from "./router-helper";

interface IntlRouterCtxModel {
  getRoute: (routeName: RouteName, args?: any) => string;
}

export const IntlRouterCtx = createContext({} as IntlRouterCtxModel);

export const IntlRouterProvider = ({ children }: any) => {
  const { t } = useTranslation("routes");

  const getRoute = (routeName: RouteName, args?: any) => {
    if (args) {
      const data = Object.keys(args);
      if (data && data.length > 0) {
        let url = t(routeName);
        data.forEach((key) => {
          url = url.replace(":" + key, args[key]);
        });

        return url;
      }
    }

    return t(routeName)!;
  };

  return (
    <IntlRouterCtx.Provider value={{ getRoute }}>
      {children}
    </IntlRouterCtx.Provider>
  );
};

export const useIntlRouter = () => useContext(IntlRouterCtx);
