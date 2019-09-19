import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import BookDetails from './BookDetails';
import Footer from "./Footer";
import About from './About';

const BookWrap = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

const MainPage = () => {
  return (
    <BookWrap>
      <NavBar />
      <Router>
        <BookDetails path="/" />
        <About path="about" />
      </Router>
      <Footer />
    </BookWrap>
  );
};

export default MainPage;
