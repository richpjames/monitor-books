import React from "react";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const AddToBasketButton = (props: IProps) => {
  const { children, onClick, disabled } = props;
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default AddToBasketButton;
