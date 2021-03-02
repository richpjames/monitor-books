import React, { useEffect } from "react";

import {
  InfoSection,
  PageWrapper,
  PageTitle,
  Text,
} from "../Components/Common";
import Layout from "../Components/layout";

const Success: React.FC = () => {
  return (
    <Layout>
      <InfoSection>
        <PageTitle>Order Successful</PageTitle>
        <p>
          Everything went through ok.
          <br /> Thanks for your order. <br /> You will receive an email with
          details. <br /> For enquiries contact@monitorbooks.co.uk
        </p>
      </InfoSection>
    </Layout>
  );
};
export default Success;
