import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";
import { useSetBackground } from "../hooks/useSetBackground";

const NotFound: React.FC<PageProps> = () => {
  useSetBackground("about");

  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>
        We couldn't find that page. <br />
        Please select an option from the header
      </p>
    </Layout>
  );
};
export default NotFound;
