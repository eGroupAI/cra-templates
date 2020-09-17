import React, { ComponentType, FC } from "react";
import { renderRoutes } from "react-router-config";
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router";
import { ReactCookieProps, withCookies } from "react-cookie";
import privateRoutes from "private-routes";
import publicRoutes from "public-routes";

interface RouterRootProps extends ReactCookieProps, RouteComponentProps {}

const RouterRoot: FC<RouterRootProps> = ({ allCookies }) => {
  if (allCookies && allCookies.hasLoginCookie) {
    return <>{renderRoutes(privateRoutes)}</>;
  }

  return <>{renderRoutes(publicRoutes)}</>;
};

export default compose<ComponentType>(withRouter, withCookies)(RouterRoot);
