import React from "react";
import styled from "styled-components";

import { paragraphSplitter } from "../../utils";

const LeftSection = styled.p`
  margin-left: 0.5%;
  width: 45%;
  text-align: justify;
  border-bottom: none;
  line-height: 1.7;
  @media only screen and (max-width: 500px) {
    padding-bottom: 25px;
    border-bottom: 1px solid black;
    margin-right: 0%;
    width: 100%;
  }
`;
const RightSection = styled(LeftSection)`
  margin-right: 0.5%;
  margin-left: 9%;
  @media only screen and (max-width: 500px) {
    margin-left: 0;
    margin-top: 5%;
  }
`;

const TextWrapper = styled.section`
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
  justify-content: start;
  white-space: pre-line;
  font-size: 1em;
  @media only screen and (max-width: 500px) {
    font-size: 0.75em;
    flex-direction: column;
  }
`;

interface IProps {
  leftText: string;
  rightText: string;
}

const Text = (props: IProps) => {
  const { leftText, rightText } = props;
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection className="LeftSection">
        {paragraphSplitter(leftText)}
      </LeftSection>
      <RightSection className="RightSection">
        {paragraphSplitter(rightText)}
      </RightSection>
    </TextWrapper>
  );
};

export default Text;
