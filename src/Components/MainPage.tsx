import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { getBooks, getVideos } from "../Hooks";
import About from "./Pages/About";
import Basket from "./Pages/Basket/Basket";
import BookDetails from "./Pages/BookPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import VideoPage from "./Pages/VideoPage";

const PageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 95%;

  @media only screen and (min-width: 600px) {
    width: 60%;
  }
`;

const MainPage = () => {
  const [books, setBooks] = useState<Book[]>();
  const [videos, setVideos] = useState<Video[]>();

  useEffect(() => {
    setBooks(getBooks());
    setVideos(getVideos());
  }, []);

  return (
    <>
      <PageWrap>
        <NavBar />
        <Router>
          {books?.map((book: Book) => (
            <BookDetails path={book.slug} book={book} key={book.slug} default />
          ))}
          {videos?.map((video) => (
            <VideoPage path={video.slug} video={video} key={video.slug} />
          ))}
          <Basket path="/basket" />
          <About path="/about" />
        </Router>
        <Footer />
      </PageWrap>
    </>
  );
};

export default MainPage;
