import React from "react";
import styled from "styled-components/macro";
import { sanitize } from "dompurify";

import { mobileBreakpoint } from "../../constants";

const LeftSection = styled.section`
  width: 45%;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--medium-text-spacing);
    border-bottom: var(--line-thickness) solid var(--main-border-colour);
    width: 100%;
  }
`;
const RightSection = styled(LeftSection) <{ photoExists: boolean }>`
  padding-left: 9%;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-left: 0;
    padding-bottom: var(--x-small-component-spacing);
    padding-top: ${({ photoExists }) => !photoExists ? `var(--x-small-component-spacing);` : `0;`}
  }
`;

const ErrorTextWrapper = styled.span`
  color: var(--pink);
`;

const TextWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 2.5%;
  b {
    font-style: italic;
  }
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    margin-bottom: var(--small-component-spacing);
  }
`;

const PhotoWrapper = styled.div`
display: none;
padding: 0;
@media only screen and (max-width: ${mobileBreakpoint}) {
  display:block;
  padding: var(--medium-component-spacing) 0;
}
`

const sanitizeText = (text: string) => {
  let safeText;
  if (typeof window === "undefined") {
    safeText = text;
  } else {
    safeText = sanitize(text);
  }
  return safeText;
};

interface Props {
  leftText: string;
  rightText: string;
  addToBasketButton?: JSX.Element;
  photo?: JSX.Element;
}

export const SplitText = (props: Props) => {
  const unsanitizedLeftText = props.leftText;
  const unsanitizedRightText = props.rightText;
  const { addToBasketButton, photo } = props;
  const sanitizedText = [unsanitizedLeftText, unsanitizedRightText].map(
    sanitizeText
  );
  const photoExists = !!photo
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection>
        <div
          className="left-section"
          dangerouslySetInnerHTML={{ __html: sanitizedText[0] }}
        />
      </LeftSection>
      <RightSection photoExists={photoExists}>
        <div
          className="right-section"
          dangerouslySetInnerHTML={{ __html: sanitizedText[1] }}
        />
        {addToBasketButton}
      </RightSection>
    </TextWrapper>
  );
};

export const Text: React.FC<{ text: string; colour?: string }> = ({ text }) => (
  <TextWrapper dangerouslySetInnerHTML={{ __html: sanitizeText(text) }} />
);

export const ErrorText: React.FC<{ line1: string; line2: string }> = ({
  line1,
  line2,
}) => (
  <>
    <ErrorTextWrapper>{line1}</ErrorTextWrapper>
    <ErrorTextWrapper>{line2}</ErrorTextWrapper>
  </>
);
