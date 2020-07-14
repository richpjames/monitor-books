import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { getBooks, getVideos } from "../Hooks";
import VideoPage from "./VideoPage";
import NavBar from "./NavBar";
import BookDetails from "./BookPage";
import Footer from "./Footer";
import About from "./About";

const PageWrap = styled.div`
  width: 75vw;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    width: 80vw;
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
          <About path="/about" />
        </Router>
      </PageWrap>
      <Footer />
    </>
  );
};

export default MainPage;
