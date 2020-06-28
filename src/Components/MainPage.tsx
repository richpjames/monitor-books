import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Router } from "@reach/router";

import { getBooks, getVideos } from "../Hooks";
import VideoPage from "./VideoPage/VideoPage";
import NavBar from "./NavBar";
import BookDetails from "./BookPage";
import Footer from "./Footer";
import About from "./About";

const BookWrap = styled.div`
  width: 70vw;
  margin: 0 auto;
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
      <BookWrap>
        <NavBar />
        <Router>
          {books?.map((book: Book) => (
            <BookDetails path={book.slug} book={book} />
          ))}
          {videos?.map((video) => (
            <VideoPage path={video.slug} video={video} />
          ))}
          <About path="about" />
        </Router>
      </BookWrap>
      <Footer />
    </>
  );
};

export default MainPage;
