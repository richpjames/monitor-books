import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/Pages/MainPage";
import { fetchVideos, fetchProducts } from "./actions/index";

interface IProps {
  fetchVideos: () => void;
  fetchProducts: () => void;
}

const App = ({ fetchVideos, fetchProducts }: IProps) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") setShowImage(true);
    fetchProducts();
    fetchVideos();
    setTimeout(() => {
      setShowImage(false);
    }, 3500);
  }, [fetchProducts, fetchVideos]);

  return (
    <>
      {showImage && <Slideshow />}
      {<MainPage hide={showImage} />}
    </>
  );
};

export default connect(null, { fetchVideos, fetchProducts })(App);
