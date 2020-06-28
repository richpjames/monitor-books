import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./Components/MainPage";
import Slideshow from "./Components/Slideshow";

const App = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 3000);
  }, []);

  return <>{showImage ? <Slideshow /> : <MainPage />}</>;
};

export default App;
