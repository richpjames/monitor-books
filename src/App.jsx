import React, { useState, useEffect } from "react";

import "./App.css";
import Slideshow from "./Components/Slideshow";
import MainPage from "./Components/MainPage";

const App = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 3000);
  }, []);

  return <>{showImage ? <Slideshow /> : <MainPage />};</>;
};

export default App;
