import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  height: 200px;
  width: 500px;
`;

const Image = styled.div`
  border: 1px solid red;
  height: 100%;
  width: 40%;
`;

const BasketListItem = () => {
  return (
    <Container>
      <Image />
      <p>Name</p>
      <br></br> <p>Price</p>
      <br></br>
      <p>Quantity</p>
    </Container>
  );
};

export default BasketListItem;
