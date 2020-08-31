import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { offWhite } from "../../../constants/colours";
import { addToCart, decrementInCart, removeFromCart } from "../../../actions";
import { QuantityPanel } from "./QuantityPanel";

const Container = styled.div`
  display: flex;
  height: 15rem;
  margin-left: 5rem;
  margin-right: 5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const InnerContainer = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
`;

const MetaInfoContainer = styled.div`
  background-color: ${offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-left: auto;
`;

const BasketListItemTitle = styled.h4`
  width: 100%;
  text-align: center;
`;

const BasketListItemSubtitle = styled.h5`
  width: 100%;
  text-align: center;
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

const Button = styled.button`
  width: 10%;
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
  let addButtonMessage = "+";
  let buttonDisabled = false;
  if (stock < 0) {
    addButtonMessage = "Out of stock";
    buttonDisabled = true;
  }

  return (
    <Container>
      <InnerContainer>
        <Photo src={imageSrc} />
        <MetaInfoContainer>
          <BasketListItemTitle>{title}</BasketListItemTitle>
          <BasketListItemSubtitle>{subtitle}</BasketListItemSubtitle>
          <QuantityPanel
            addToCart={() => addToCart(id)}
            decrementInCart={() => decrementInCart(id)}
            addButtonMessage={addButtonMessage}
            outOfStock={buttonDisabled}
            quantity={quantity}
          />
          <Button onClick={() => removeFromCart(id, quantity)}>Bin</Button>
        </MetaInfoContainer>
      </InnerContainer>
    </Container>
  );
};

export default connect(null, { addToCart, removeFromCart, decrementInCart })(
  BasketListItem
);
