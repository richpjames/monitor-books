import React from "react";
import styled from "styled-components/macro";
import { sanitize } from "dompurify";

const LeftSection = styled.div`
  width: 45%;
  text-align: justify;
  @media only screen and (max-width: 600px) {
    padding-bottom: 25px;
    border-bottom: 1px solid black;
    margin-right: 0%;
    width: 100%;
  }
`;
const RightSection = styled(LeftSection)`
  padding-left: 9%;
  @media only screen and (max-width: 600px) {
    padding-left: 0;
    margin-top: 5%;
  }
`;

const ErrorTextWrapper = styled.span`
  color: #ec9696;
`;

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 2.5%;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const sanitizeText = (text: string) => {
  let safeText;
  if (!window) {
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
}

export const SplitText = (props: Props) => {
  const unsanitizedLeftText = props.leftText;
  const unsanitizedRightText = props.rightText;

  const { addToBasketButton } = props;
  const sanitizedText = [unsanitizedLeftText, unsanitizedRightText].map(
    sanitizeText
  );
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection
        className="left-section"
        dangerouslySetInnerHTML={{ __html: sanitizedText[0] }}
      />
      <RightSection>
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
