import React from "react";
import styled from "@emotion/styled";

import { mobileBreakpoint } from "../../constants";

export const LeftSection = styled.div<{ className: string }>`
  width: 45%;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--spacing-3);
    border-bottom: var(--line-thickness) solid var(--main-border-colour);
    width: 100%;
  }
`;

export const RightSection = styled.div<{ className: string }>`
  width: 100%;
  padding-bottom: 0;
  p {
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-left: 0;
    padding-bottom: var(--spacing-2);
    padding-top: var(--spacing-2);
  }
`;

export const RightSectionWrapper = styled.div`
  padding-left: 9%;
  display: flex;
  flex-direction: column;
  width: 45%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    width: 100%;
    padding-left: 0;
  }
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 2.5%;
  b {
    font-style: italic;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    margin-bottom: var(--spacing-6);
  }
`;

const ErrorTextWrapper = styled.span`
  color: var(--pink);
`;

export const ErrorText: React.FC<{ line1: string; line2: string }> = ({
  line1,
  line2,
}) => (
  <>
    <ErrorTextWrapper>{line1}</ErrorTextWrapper>
    <ErrorTextWrapper>{line2}</ErrorTextWrapper>
  </>
);
