import React, { useEffect } from "react";
import { Location } from "@reach/router";

//this prevents the page from opening at the centre

const OnRouteChangeWorker = ({ location, action }) => {
  useEffect(() => {
    const prevRoute = location.pathname;
    if (prevRoute !== location.pathname) action();
  }, [location.pathname, action]);
  return null;
};

const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => {
      console.log(location);
      return <OnRouteChangeWorker location={location} action={action} />;
    }}
  </Location>
);

export default OnRouteChange;
