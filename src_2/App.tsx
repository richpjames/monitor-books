import React, { useEffect } from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";

import "./App.css";
import Slideshow from "./Components/Global/Slideshow";
import MainPage from "./Components/Pages/MainPage";
import { fetchVideos, fetchProducts, setShowSlideshow } from "./actions/index";
import {
  introTimerMilliseconds,
  homePage,
  productsPageName,
} from "./constants";

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
    } else {
      setShowSlideshow(false);
    }
    fetchProducts();
    fetchVideos();
  }, [fetchProducts, fetchVideos, showSlideshow, setShowSlideshow]);

  return <>{showSlideshow ? <Slideshow /> : <MainPage />}</>;
};

const mapStateToProps = ({ config }: State) => {
  return { showSlideshow: config.showSlideshow };
};

export default connect(mapStateToProps, {
  fetchVideos,
  fetchProducts,
  setShowSlideshow,
})(App);
