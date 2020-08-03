import React from "react";
import styled from "styled-components/macro";

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
}

const BasketListItem = ({
  title,
  quantity,
  subtitle,
  imageSrc,
  stock,
}: IProps) => (
  <Container>
    <Photo src={imageSrc} />
    <MetaInfoContainer>
      <BasketListItemTitle>{title}</BasketListItemTitle>
      <BasketListItemSubtitle>{subtitle}</BasketListItemSubtitle>
      <Quantity>
        Quantity:
        <input
          type="number"
          id={`${title}_quantity`}
          name={`${title}_quantity`}
          min="0"
          max={stock}
          value={quantity}
        />
      </Quantity>
    </MetaInfoContainer>
  </Container>
);

export default BasketListItem;
