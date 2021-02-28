import React from "react";

import { InfoSection, PageTitle, Text } from "../Components/Common";
import Layout from "../Components/layout";

const NotFound: React.FC = () => {
  return (
    <Layout>
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
