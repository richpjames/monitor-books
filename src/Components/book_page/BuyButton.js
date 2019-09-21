 import React from "react";
import styled from "styled-components";

const FullWidthWrap = styled.div`
  margin-left: 4%;
  margin-right: 4%;

  @media only screen and (max-width: 600px) {
    padding-bottom: 5%;
  }
`;

const BuyBackground = styled.div`
  background-color: black;
  height: 40px;
  width: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vw;
  position: relative;
`;
const BuyText = styled.p`
  color: white;
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function BuyButton() {
  return (
    <FullWidthWrap>
      <BuyBackground>
        <BuyText>
        
            Pre-Order
        </BuyText>
      </BuyBackground>
    </FullWidthWrap>
  );
}

export default BuyButton;
