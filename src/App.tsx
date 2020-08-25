import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";
import { fetchVideos, fetchProducts } from "./actions/index";

interface IProps {
  fetchVideos: () => void;
  fetchProducts: () => void;
}

const App = ({ fetchVideos, fetchProducts }: IProps) => {
  const [showImage, setShowImage] = useState(false);
  console.log(process.env);
  useEffect(() => {
    fetchProducts();
    fetchVideos();
    setTimeout(() => {
      setShowImage(false);
    }, 3000);
  }, [fetchProducts, fetchVideos]);

  return <>{showImage ? <Slideshow /> : <MainPage />};</>;
};

export default connect(null, { fetchVideos, fetchProducts })(App);