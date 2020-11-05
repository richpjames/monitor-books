import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, PageWrapper, PageTitle, Text } from "../Common";

export const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <PageWrapper>
      <InfoSection>
        <PageTitle>Page Not Found</PageTitle>
        <Text
          text={`<p>We couldn't find that page. <br />Please select an option from the header</p>`}
        />
      </InfoSection>
    </PageWrapper>
  );
};
