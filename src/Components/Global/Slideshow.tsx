import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

import { mobileBreakpoint } from "../../constants";

import { TextBoxLogo } from "./TextBoxLogo";
import { EagerLoadWrapper } from "../../Components/Common/EagerLoadWrapper";

const BoxWrapper = styled.div`
  margin-top: -100px;
  width: 25%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    width: 50%;
  }
`;

export const IntroPageWrapper = styled.div`
  padding-top: var(--spacing-6);
  padding-left: var(--spacing-6);
  padding-right: var(--spacing-6);
  padding-bottom: var(--spacing-10);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--current-background-colour);
  justify-content: center;
  position: fixed;
  z-index: 1;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding: var(--spacing-6), var(--spacing-2);
  }
`;

export const Slideshow = ({
  children,
  show,
}: PropsWithChildren<{
  show: React.Dispatch<React.SetStateAction<boolean>>;
}>) => {
  return (
    <div onClick={() => show(false)}>
      <EagerLoadWrapper>{children}</EagerLoadWrapper>
      <IntroPageWrapper>
        <BoxWrapper>
          <TextBoxLogo />
        </BoxWrapper>
      </IntroPageWrapper>
    </div>
  );
};
