import React from "react";
import styled from "styled-components/macro";

import { paragraphSplitter } from "../../utils";

const LeftSection = styled.div`
  width: 45%;
  text-align: justify;
  @media only screen and (max-width: 500px) {
    padding-bottom: 25px;
    border-bottom: 1px solid black;
    margin-right: 0%;
    width: 100%;
  }
`;
const RightSection = styled(LeftSection)`
  padding-left: 9%;
  @media only screen and (max-width: 500px) {
    padding-left: 0;
    margin-top: 5%;
  }
`;

const TextWrapper = styled.section`
  display: flex;
  padding-top: 2.5%;
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
