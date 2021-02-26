import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

export const RoutingContainer: FunctionComponent<RouteComponentProps> = ({
  children,
}) => {
  return <>{children}</>;
};
