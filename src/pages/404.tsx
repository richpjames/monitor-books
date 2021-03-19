import React from "react";
import { PageProps } from "gatsby";

import { InfoSection } from "../Components/Common";
import Layout from "../Components/layout";
import SEO from "../Components/seo";

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout backgroundColour="var(--faded-blue)" pathname={location.pathname}>
      <SEO
        title="404 Page"
        description="Sorry, we couldn't find the page you're looking for"
      />
      <InfoSection>
        <h1>Page Not Found</h1>
        <p>
          We couldn't find that page. <br />
          Please select an option from the header
        </p>
      </InfoSection>
    </Layout>
  );
};
export default NotFound;
