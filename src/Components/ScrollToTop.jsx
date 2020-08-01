import React, { useEffect } from "react";
import { Location } from "@reach/router";

//this prevents the page from opening at the centre

const OnRouteChangeWorker = ({ location, action }) => {
  useEffect(() => action(), [location.pathname, action]);
  return null;
};

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => (
      <OnRouteChangeWorker location={location} action={action} />
    )}
  </Location>
);

export default OnRouteChange;
