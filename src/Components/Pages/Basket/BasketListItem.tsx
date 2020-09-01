import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { offWhite, offOffWhite } from "../../../constants/colours";
import { addToCart, decrementInCart, removeFromCart } from "../../../actions";
import { QuantityPanel } from "./QuantityPanel";

const Container = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: ${(props) => (props.index < 1 ? "0" : "2rem")};
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

const MetaInfoContainer = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  position: relative;
  background-color: ${(props) =>
    props.index < 1 ? `${offWhite}` : `${offOffWhite}`};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const BasketListItemTitle = styled.h3`
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
`;

const BasketListItemSubtitle = styled.h4`
  padding-top: 0.1rem;
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

const PhotoWrap = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${offWhite};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    max-height: 100vw;
    margin: 3% 0%;
    max-width: 100%;
    height: 100%;
  }
`;

const RemoveFromCartButton = styled.button`
  right: 0;
  position: absolute;
  font-size: 0.75em;
`;
interface IProps {
  addToCart: (id: string) => void;
  decrementInCart: (id: string) => void;
  id: string;
  imageSrc: string;
  index: number;
  price: string;
  quantity: number;
  removeFromCart: (id: string, quantityToReplace: number) => void;
  stock: number;
  subtitle: string;
  title: string;
}

const BasketListItem = ({
  addToCart,
  decrementInCart,
  id,
  imageSrc,
  index,
  quantity,
  removeFromCart,
  stock,
  subtitle,
  title,
}: IProps) => {
  return (
    <Container index={index}>
      <PhotoWrap>
        <Photo src={imageSrc} />
      </PhotoWrap>
      <MetaInfoContainer index={index}>
        <BasketListItemTitle>{title}</BasketListItemTitle>
        <BasketListItemSubtitle>{subtitle}</BasketListItemSubtitle>
        <QuantityPanel
          addToCart={() => addToCart(id)}
          decrementInCart={() => decrementInCart(id)}
          outOfStock={stock < 0}
          quantity={quantity}
        />
        <RemoveFromCartButton onClick={() => removeFromCart(id, quantity)}>
          X
        </RemoveFromCartButton>
      </MetaInfoContainer>
    </Container>
  );
};

export default connect(null, { addToCart, removeFromCart, decrementInCart })(
  BasketListItem
);
