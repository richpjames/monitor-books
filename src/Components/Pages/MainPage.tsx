import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./About";
import BasketContainer from "./Basket/BasketContainer";
import ProductPage from "./ProductPage";
import Footer from "../Global/Footer";
import NavBar from "../Global/NavBar";
import VideoPage from "./VideoPage";
import OnRouteChange from "../Global/ScrollToTop";
import { Success } from "./Success";
import { ProductsPage } from "./ProductsPage";
import { VideosPage } from "./VideosPage";

const PageWrap = styled.div<{ hide: boolean }>`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 95%;
  display: ${(props) => (props.hide ? "none" : "block")};
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
`;

interface Props {
  books?: byId<Product>;
  videos?: byId<Video>;
  bookIds?: visibileIds;
  videoIds?: visibileIds;
  hide: boolean;
}

const MainPage = ({
  books = {},
  bookIds = [],
  videos = {},
  videoIds = [],
  hide,
}: Props) => {
  return (
    <>
      <PageWrap hide={hide}>
        <NavBar />
        <Router>
          <ProductsPage bookIds={bookIds} books={books} path="books" />
          {bookIds.map((bookId) => {
            const {
              photos,
              title,
              author,
              blurb1,
              blurb2,
              slug,
              imagePath,
            } = books[bookId];

            return (
              <ProductPage
                id={bookId}
                photos={photos}
                title={title}
                author={author}
                leftDescription={blurb1}
                rightDescription={blurb2}
                imagePath={imagePath}
                path={slug}
                key={bookId}
              />
            );
          })}
          <VideosPage path="videos" />
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
