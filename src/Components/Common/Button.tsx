import React from "react";
import styled from "styled-components/macro";


const ButtonStyles = styled.button`
 flex: 1;
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
