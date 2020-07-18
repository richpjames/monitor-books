import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import { getVideos } from "../Hooks";
import About from "./Pages/About";
import BasketContainer from "./Pages/Basket/BasketContainer";
import BookDetails from "./Pages/BookPage";
import Footer from "./Footer";
import NavBar from "./NavBar";
import VideoPage from "./Pages/VideoPage";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";

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

const MainPage = ({ products, addToCart }) => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    setVideos(getVideos());
  }, []);

  return (
    <>
      <PageWrap>
        <NavBar />
        <Router>
          {products?.map((book) => (
            <BookDetails
              path={book.slug}
              book={book}
              key={book.id}
              addBookToBasket={() => addToCart(book.id)}
              default={book.slug === "anthology"}
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

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
});

export default connect(mapStateToProps, { addToCart })(MainPage);
