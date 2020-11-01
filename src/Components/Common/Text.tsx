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

const ErrorTextWrapper = styled.p`
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

interface Props {
  leftText: string;
  rightText: string;
  addToBasketButton?: JSX.Element;
}

export const SplitText = (props: Props) => {
  const { leftText, rightText, addToBasketButton } = props;
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection
        className="LeftSection"
        dangerouslySetInnerHTML={{ __html: sanitize(leftText) }}
      />
      <RightSection>
        <div
          className="RightSection"
          dangerouslySetInnerHTML={{ __html: sanitize(rightText) }}
        />
        {addToBasketButton}
      </RightSection>
    </TextWrapper>
  );
};

export const Text: React.FC<{ text: string; colour?: string }> = ({ text }) => (
  <TextWrapper dangerouslySetInnerHTML={{ __html: sanitize(text) }} />
);

export const ErrorText: React.FC<{ text: string }> = ({ text }) => (
  <ErrorTextWrapper>{text}</ErrorTextWrapper>
);
