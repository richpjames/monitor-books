import React, { useState, useEffect } from "react";
import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";

const App = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowImage(false);
    }, 3000);
  }, []);

  return <MainPage />;
};

export default App;
