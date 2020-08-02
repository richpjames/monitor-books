import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./Pages/About";
import BasketContainer from "./Pages/Basket/BasketContainer";
import BookDetails from "./Pages/BookPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import VideoPage from "./Pages/VideoPage";
import OnRouteChange from "./ScrollToTop";

const PageWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 95%;

  @media only screen and (min-width: 600px) {
    width: 60%;
  }
`;

interface IProps {
  addToCart: (id: string) => void;
  books: { [id: string]: Book };
  videos: { [id: string]: Video };
  bookIds: string[];
  videoIds: string[];
}

const MainPage = ({ books, bookIds, videos, videoIds, addToCart }: IProps) => {
  return (
    <>
      <PageWrap>
        <NavBar />
        <Router>
          {bookIds?.map((bookId) => (
            <BookDetails
              path={books[bookId].slug}
              book={books[bookId]}
              key={bookId}
              default={books[bookId].slug === "anthology"}
            />
          ))}
          {videoIds?.map((videoId) => (
            <VideoPage
              path={videos[videoId].slug}
              video={videos[videoId]}
              key={videos[videoId].slug}
            />
          ))}
          <BasketContainer path="/basket" />
          <About path="/about" />
        </Router>
        {/* this prevents the page from opening at the centre */}
        <OnRouteChange action={() => window.scrollTo(0, 0)} />
        <Footer />
      </PageWrap>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    bookIds: state.products.visibleIds,
    books: state.products.byId,
    videoIds: state.videos.visibleIds,
    videos: state.videos.byId,
  };
};

export default connect(mapStateToProps)(MainPage);
