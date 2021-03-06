import React from "react";
import { PageProps } from "gatsby";

import { InfoSection, PageTitle } from "../Components/Common";
import Layout from "../Components/layout";

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout backgroundColour="olive" pathname={location.pathname}>
      <InfoSection>
        <PageTitle>Page Not Found</PageTitle>
        <p>
          We couldn't find that page. <br />
          Please select an option from the header
        </p>
      </InfoSection>
    </Layout>
  );
};
export default NotFound;
