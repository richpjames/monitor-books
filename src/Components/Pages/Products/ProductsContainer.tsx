import React, { FunctionComponent } from "react";
import { RouteComponentProps } from "@reach/router";

export const ProductsContainer: FunctionComponent<RouteComponentProps> = ({
  children,
}) => {
  return <>{children}</>;
};
