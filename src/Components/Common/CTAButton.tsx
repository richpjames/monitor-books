import React from "react";
import styled from "styled-components/macro";

const ButtonStyles = styled.button`
  width: 150px;
  height: 40px;
`;

const ButtonWrapper = styled.div`
  grid-area: checkout-button;
  padding-top: 1rem;
`;
interface CTAButtonProps {
  onClick?: (click: React.MouseEvent) => void;
  disabled: boolean;
  children: string;
  className?: string;
  id?: string;
}

export function CTAButton({
  onClick = () => null,
  disabled,
  children,
  className,
  id,
}: CTAButtonProps) {
  return (
    <ButtonWrapper id={id}>
      <ButtonStyles onClick={onClick} disabled={disabled} className={className}>
        {children}
      </ButtonStyles>
    </ButtonWrapper>
  );
}
