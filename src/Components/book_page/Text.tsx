import React from "react";
import styled from "styled-components";

const LeftSection = styled.p`
  margin-left: 0.5%;
  width: 45%;
  @media only screen and (max-width: 500px) {
    margin-right: 0%;
    width: 100%;
  }
`;
const RightSection = styled.p`
  width: 45%;
  margin-right: 0.5%;
  margin-left: 11%;
  text-align: right;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-right: 0%;
  }
`;
const TextWrapper = styled.section`
  display: flex;
  line-height: 1.3;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
  justify-content: start;
`;

interface IProps {
  leftText: String;
  rightText: String;
}

const Text = (props: IProps) => {
  const { leftText, rightText } = props;
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection className="LeftSection">{leftText}</LeftSection>
      <RightSection className="RightSection">{rightText}</RightSection>
    </TextWrapper>
  );
};

export default Text;
