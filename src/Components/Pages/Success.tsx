import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, PageWrapper, Title, Text } from "../Common";

interface Props extends RouteComponentProps {}
export const Success = (props: Props) => {
  return (
    <PageWrapper>
      <InfoSection>
        <Title title="Success" />
        <Text
          leftText={"payment confirmed.\n everything went through ok"}
          rightText={"maybe display order here?"}
        />
      </InfoSection>
    </PageWrapper>
  );
};
