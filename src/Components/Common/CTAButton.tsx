import React from "react";
import styled from "styled-components/macro";

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
const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
`;

interface IProps {
  onClick: (click: React.MouseEvent) => void;
  disabled: boolean;
  children: string;
  onDisabledRedirect?: () => void;
  disabledRedirect?: boolean;
}

export function Button({
  onClick,
  disabled,
  children,
  onDisabledRedirect,
  disabledRedirect,
}: IProps) {
  return (
    <ButtonStyles
      onClick={disabledRedirect ? onDisabledRedirect : onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyles>
  );
}
