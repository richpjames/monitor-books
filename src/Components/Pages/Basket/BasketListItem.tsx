import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { addToCart, decrementInCart, removeFromCart } from "../../../actions";

const Container = styled.div`
  display: flex;
  height: 200px;
  width: 500px;
`;

const MetaInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px;
`;

const BasketListItemTitle = styled.h3`
  width: 100%;
  text-align: center;
`;

const BasketListItemSubtitle = styled.h4`
  width: 100%;
  text-align: center;
`;

const Quantity = styled.span`
  width: 100%;
  text-align: center;
  padding-top: 15px;
`;

const Photo = styled.img`
  max-height: 100%;
  max-width: 100%;
  @media only screen and (max-width: 600px) {
    max-height: 100vw;
    margin: 3% 0%;
    width: 100%;
    height: 100%;
  }
`;
interface IProps {
  title: string;
  subtitle: string;
  quantity: number;
  price: string;
  imageSrc: string;
  stock: number;
  id: string;
  addToCart: (id: string) => void;
  decrementInCart: (id: string) => void;
  removeFromCart: (id: string, quantityToReplace: number) => void;
}

const BasketListItem = ({
  title,
  quantity,
  subtitle,
  imageSrc,
  stock,
  id,
  addToCart,
  decrementInCart,
  removeFromCart,
}: IProps) => {
  let addButtonMessage;
  let buttonDisabled;
  if (stock > 0) {
    addButtonMessage = "Add another copy";
    buttonDisabled = false;
  } else {
    addButtonMessage = "Out of stock";
    buttonDisabled = true;
  }

  return (
    <Container>
      <Photo src={imageSrc} />
      <MetaInfoContainer>
        <BasketListItemTitle>{title}</BasketListItemTitle>
        <BasketListItemSubtitle>{subtitle}</BasketListItemSubtitle>
        <button
          onClick={() => {
            return addToCart(id);
          }}
          disabled={buttonDisabled}
        >
          {addButtonMessage}
        </button>
        <Quantity>
          Quantity:
          {quantity}
        </Quantity>
        <button onClick={() => decrementInCart(id)} disabled={quantity <= 0}>
          Less copies!
        </button>
        <button onClick={() => removeFromCart(id, quantity)}>Bin</button>
      </MetaInfoContainer>
    </Container>
  );
};

export default connect(null, { addToCart, removeFromCart, decrementInCart })(
  BasketListItem
);
