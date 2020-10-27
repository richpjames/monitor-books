import React, { useEffect } from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

import "./App.css";
import Slideshow from "./Components/Global/Slideshow";
import MainPage from "./Components/Pages/MainPage";
import { fetchVideos, fetchProducts, setShowSlideshow } from "./actions/index";
import { introTimer, homePage, productsPageName } from "./constants/";

const introTimerMilliseconds = introTimer * 1000;

interface Props {
  fetchVideos: () => void;
  fetchProducts: () => void;
  setShowSlideshow: (showSlideshow: boolean) => void;
  showSlideshow: boolean;
}

const App = ({
  fetchVideos,
  fetchProducts,
  setShowSlideshow,
  showSlideshow,
}: Props) => {
  useEffect(() => {
    if (window.location.pathname === "/" && showSlideshow) {
      setTimeout(() => {
        navigate(`${productsPageName}/${homePage}`);
        setShowSlideshow(false);
      }, introTimerMilliseconds);
    }
    fetchProducts();
    fetchVideos();
  }, [fetchProducts, fetchVideos, showSlideshow, setShowSlideshow]);

  return (
    <>
      {showSlideshow && <Slideshow />}
      {<MainPage hide={showSlideshow} />}
    </>
  );
};

const mapStateToProps = ({
  config,
}: {
  config: { showSlideshow: boolean };
}) => {
  return { showSlideshow: config.showSlideshow };
};

export default connect(mapStateToProps, {
  fetchVideos,
  fetchProducts,
  setShowSlideshow,
})(App);
