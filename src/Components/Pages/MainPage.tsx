import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./About";
import BasketContainer from "./Basket/BasketContainer";
import ProductPage from "./Products/ProductPage";
import Footer from "../Global/Footer";
import { Header } from "../Global/Header";
import VideoPage from "./Videos/VideoPage";
import OnRouteChange from "../Global/ScrollToTop";
import { Success } from "./Success";
import { ProductsPage } from "./Products/ProductsPage";
import { VideosPage } from "./Videos/VideosPage";
import { ProductsContainer } from "./Products/ProductsContainer";
import { productsPageName } from "../../constants";

const PageWrap = styled.div<{ hide: boolean }>`
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 95%;
  display: ${(props) => (props.hide ? "none" : "block")};
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 400px) {
    width: 80%;
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
  console.log("main page loaded", videos, books);

  return (
    <>
      <PageWrap hide={hide}>
        <Header />
        <Router>
          <ProductPage id="9T65B28LLM2MD" path="/" default />
          <ProductsContainer path={productsPageName}>
            <ProductsPage bookIds={bookIds} books={books} path="/" />
            {bookIds.map((bookId) => {
              const { slug } = books[bookId];
              return <ProductPage id={bookId} path={slug} key={bookId} />;
            })}
          </ProductsContainer>
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
  const { products, videos, config } = state;
  return {
    bookIds: products.visibleIds,
    books: products.byId,
    videoIds: videos.visibleIds,
    videos: videos.byId,
    showSlideshow: config.showSlideshow,
  };
};

export default connect(mapStateToProps)(MainPage);
