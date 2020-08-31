import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./About";
import BasketContainer from "./Basket/BasketContainer";
import ProductPage from "./ProductPage";
import Footer from "../Footer";
import NavBar from "../NavBar";
import VideoPage from "./VideoPage";
import OnRouteChange from "../ScrollToTop";
import { Success } from "./Success";

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
  books?: byId<Book>;
  videos?: byId<Video>;
  bookIds?: visibileIds;
  videoIds?: visibileIds;
}

const MainPage = ({
  books = {},
  bookIds = [],
  videos = {},
  videoIds = [],
}: IProps) => {
  return (
    <>
      <PageWrap>
        <NavBar />
        <Router>
          {bookIds.map((bookId) => (
            <ProductPage
              path={books[bookId].slug}
              book={books[bookId]}
              key={bookId}
              default={books[bookId].slug === "anthology"}
            />
          ))}
          {videoIds.map((videoId) => (
            <VideoPage
              path={videos[videoId].slug}
              video={videos[videoId]}
              key={videoId}
            />
          ))}
          <BasketContainer path="/basket" />
          <About path="/about" />
          <Success path="/success" />
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
