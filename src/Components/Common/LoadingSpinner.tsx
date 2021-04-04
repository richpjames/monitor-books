import React from "react";
import styled from "styled-components/macro";

import { LoadingAnimation } from "./LoadingAnimation";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const LoadingSpinner = () => {
  return (
    <LoadingWrapper>
      <LoadingAnimation />
    </LoadingWrapper>
  );
};
