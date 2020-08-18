import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";
import { fetchVideos, fetchProducts } from "./actions/index";

const App = ({ fetchVideos, fetchProducts }) => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    fetchProducts();
    fetchVideos();
    setTimeout(() => {
      setShowImage(false);
    }, 3000);
  }, []);

  return <>{showImage ? <Slideshow /> : <MainPage />};</>;
};

export default connect(null, { fetchVideos, fetchProducts })(App);
