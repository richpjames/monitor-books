import React from "react";
import { PageProps } from "gatsby";

import { InfoSection } from "../Components/Common";
import Layout from "../Components/layout";

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout backgroundColour="var(--faded-blue)" pathname={location.pathname}>
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
