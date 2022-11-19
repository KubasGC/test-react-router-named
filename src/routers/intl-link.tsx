import { FunctionComponent, RefAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";
import { RouteName } from "./router-helper";
import { useIntlRouter } from "./use-router-intl";

interface IntlLinkProps extends LinkProps, RefAttributes<HTMLAnchorElement> {
  to: RouteName;
  args?: any;
}

const IntlLink: FunctionComponent<IntlLinkProps> = (props) => {
  const { getRoute } = useIntlRouter();
  return <Link {...props} to={getRoute(props.to, props.args)} />;
};

export default IntlLink;
