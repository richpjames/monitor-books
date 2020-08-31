import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { InfoSection } from "../Common/Common";
import Title from "../Common/Title";

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface Props extends RouteComponentProps {}
export const Success = (props: Props) => {
  return (
    <PageWrapper>
      <Title title="Success" />
      <InfoSection></InfoSection>
    </PageWrapper>
  );
};
