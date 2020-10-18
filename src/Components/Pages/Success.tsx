import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, PageWrapper, Title, Text } from "../Common";

export const Success: React.FC<RouteComponentProps> = () => {
  return (
    <PageWrapper>
      <InfoSection>
        <Title title="Success" />
        <Text
          text={`Everything went through ok. Thanks for your order. \n You will receive an email with details of your order. \n For enquiries contact@monitorbooks.co.uk`}
        />
      </InfoSection>
    </PageWrapper>
  );
};
