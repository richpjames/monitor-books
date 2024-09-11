import React from "react";
import { PageProps } from "gatsby";

import Layout from "../Components/layout";

const NotFound: React.FC<PageProps> = () => {
  return (
    <Layout backgroundColour="about">
      <h1>Page Not Found</h1>
      <p>
        We couldn't find that page. <br />
        Please select an option from the header
      </p>
    </Layout>
  );
};
export default NotFound;
