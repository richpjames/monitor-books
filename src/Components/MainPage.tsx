import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { books } from "./data.json";

import NavBar from "./NavBar";
import BookDetails from "./book_page/BookDetails";
import Footer from "./Footer";
import About from "./About";

const BookWrap = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const MainPage = () => {
  return (
    <>
      <BookWrap>
        <NavBar />
        <Router>
          <BookDetails path="/" book={books[0]} />
          <About path="about" />
        </Router>
      </BookWrap>
      <Footer />
    </>
  );
};

export default MainPage;
