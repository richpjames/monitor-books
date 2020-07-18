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

interface IProps {
  title: string;
}

const BasketListItem = ({ title }: IProps) => {
  return (
    <Container>
      <Image />
      <p>{title}</p>
      {/* <br></br> <p>{children}</p> */}
      <br></br>
      <p>Quantity</p>
    </Container>
  );
};

export default BasketListItem;
