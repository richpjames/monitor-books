import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import { Basket } from "grommet-icons";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Number = styled.p`
  font-weight: 200;
  font-family: "GT America", sans-serif;
  width: 10px;
  height: 10px;
  line-height: 10px;
  background-color: black;
  color: white;
  border-radius: 15%;
  position: absolute;
  z-index: 1;
  padding: 2px;
`;

const Icon = styled(Basket)`
  position: relative;
  z-index: 0;
`;

// interface IProps {
//   totalQuantity: number;
// }

const BasketIcon = ({ totalQuantity }) => {
  return (
    <Container>
      <IconWrapper>
        <Number>{totalQuantity}</Number>
        <Icon />
      </IconWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { addedIds, quantityById } = state.cart;
  return {
    totalQuantity: addedIds.reduce((previousValue, currentValue) => {
      return previousValue + quantityById[currentValue];
    }, 0),
  };
};

export default connect(mapStateToProps)(BasketIcon);
