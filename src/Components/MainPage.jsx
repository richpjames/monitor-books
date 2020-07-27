import React from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import About from "./Pages/About";
import BasketContainer from "./Pages/Basket/BasketContainer";
import BookDetails from "./Pages/BookPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import { getVideos } from "../reducers/videos";
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

// interface IProps {
//   addToCart: (id: string) => void;
// }

const MainPage = ({ books, bookIds, videos, addToCart }) => {
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
              addBookToBasket={() => addToCart(bookId)}
              default={books[bookId].slug === "anthology"}
            />
          ))}
          {videos?.map((video) => (
            <VideoPage path={video.slug} video={video} key={video.slug} />
          ))}
          <BasketContainer path="/basket" />
          <About path="/about" />
        </Router>
        <Footer />
      </PageWrap>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bookIds: state.products.visibleIds,
    books: state.products.byId,
    videos: state.videos,
  };
};

export default connect(mapStateToProps, { addToCart })(MainPage);
