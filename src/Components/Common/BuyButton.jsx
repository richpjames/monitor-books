import React from "react";
import styled from "styled-components";
//USED TO CREATE BUTTON IMG
// const FullWidthWrap = styled.div`
//   margin-left: 4%;
//   margin-right: 4%;
//   @media only screen and (max-width: 600px) {
//     padding-bottom: 5%;
//   }
// `;
// const BuyBackground = styled.div`
//   background-color: black;
//   height: 40px;
//   width: 150px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 2vw;
//   position: relative;
// `;
// const BuyText = styled.p`
//   color: white;
//   position: absolute;
//   top: 14%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
const BuyButtonImg = styled.input`
  width: 150px;
  height: 40px;
`;

const PayPalForm = styled.form`
  width: 150px;
  padding-top: 4vh;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 500px) {
    margin-top: 7%;
  }
`;
function BuyButton() {
  return (
    <PayPalForm
      target="paypal"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
    >
      <input type="hidden" name="cmd" value="_s-xclick"></input>
      <input
        type="hidden"
        name="hosted_button_id"
        value="9T65B28LLM2MC"
      ></input>
      <BuyButtonImg
        type="image"
        src="https://www.richjames.co.uk/img/buy-button.png"
        border="0"
        name="submit"
        alt="Buy"
      ></BuyButtonImg>
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif(43 B)
https://www.paypalobjects.com/en_GB/i/scr/pixel.gif
"
        width="1"
        height="0.5"
      ></img>
    </PayPalForm>
  );
}

export default BuyButton;
