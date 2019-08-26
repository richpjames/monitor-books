import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Photos from "./Photos";
import Text from "./Text";
import Footer from "./Footer";

const BookWrap = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const MurmurBook = () => {
  return (
    <BookWrap>
      <NavBar />
      <Photos />
      <Text />
      <Footer />
    </BookWrap>
  );
};

export default MurmurBook;
