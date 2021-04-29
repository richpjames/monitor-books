import React from "react";
import styled from "styled-components/macro";

import { mobileBreakpoint } from "../../constants"

const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
  background: var(--button-colour);
  color: var(--product-background-colour);
  border: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }
`;

interface ButtonProps {
  onClick?: (click: React.MouseEvent) => void;
  disabled: boolean;
  children: string;
  className?: string;
  id?: string;
}

export function Button({
  onClick = () => null,
  disabled,
  children,
  className,
  id,
}: ButtonProps) {
  return (
    <ButtonStyles
      onClick={onClick}
      disabled={disabled}
      className={className}
      id={id}
    >
      {children}
    </ButtonStyles>
  );
}
