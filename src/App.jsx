import React, { useState, useEffect } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import basketReducer from "./redux/reducer";
import MainPage from "./Components/MainPage";
import Slideshow from "./Components/Slideshow";

const store = createStore(
  basketReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 3000);
  }, []);

  return (
    <>
      {showImage ? (
        <Slideshow />
      ) : (
        <Provider store={store}>
          <MainPage />
        </Provider>
      )}
      ;
    </>
  );
};

export default App;
