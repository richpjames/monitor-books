import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { InfoSection } from "../Common/Common";
import Title from "../Common/Title";
import Text from "../Common/Text";

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

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
