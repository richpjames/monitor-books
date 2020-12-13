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
import { RoutingContainer } from "../Common/RoutingContainer";
import { productsPageName } from "../../constants";
import { NotFound } from "./NotFound";

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
  books?: ById<Product>;
  videos?: ById<Video>;
  bookIds?: VisibileIds;
  videoIds?: VisibileIds;
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
        <Header />
        <Router>
          <ProductPage id="9T65B28LLM2MD" path="/" />
          <RoutingContainer path={productsPageName}>
            <ProductsPage bookIds={bookIds} books={books} path="/" />
            {bookIds.map((bookId) => {
              const { slug } = books[bookId];
              return <ProductPage id={bookId} path={slug} key={bookId} />;
            })}
          </RoutingContainer>
          <VideosPage
            videos={videos}
            videoIds={videoIds}
            path="/murmur-reading-series"
          />
          {videoIds.map((videoId) => (
            <VideoPage
              path={`/murmur-reading-series/${videos[videoId].slug}`}
              video={videos[videoId]}
              key={videoId}
            />
          ))}
          <BasketContainer path="/basket" />
          <About path="/about" />
          <Success path="/success" />
          <NotFound default />
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
