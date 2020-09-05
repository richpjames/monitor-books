import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./About";
import BasketContainer from "./Basket/BasketContainer";
import ProductPageContainer from "./ProductPageContainer";
import Footer from "../Footer";
import NavBar from "../NavBar";
import VideoPage from "./VideoPage";
import OnRouteChange from "../ScrollToTop";
import { Success } from "./Success";
import { ProductsPage } from "./ProductsPage";
import { VideosPage } from "./VideosPage";

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
  books?: byId<Product>;
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
          <ProductsPage bookIds={bookIds} books={books} path="books" />
          {bookIds.map((bookId) => (
            <ProductPageContainer
              path={books[bookId].slug}
              product={books[bookId]}
              key={bookId}
              default={books[bookId].slug === "anthology"}
            />
          ))}
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
