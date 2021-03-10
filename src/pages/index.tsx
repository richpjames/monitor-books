import React, { useEffect } from "react";
import { navigate } from "gatsby";

import { PageWrapper } from "../Components/Common";
import { introTimerMilliseconds } from "../constants";
const navigateToBooks = () => navigate("/books/propositions");

const Home = () => {
  useEffect(() => {
    if (window)
      (window as any).introTimer = setTimeout(() => {
        navigateToBooks();
      }, introTimerMilliseconds);
  }, []);
  return (
    <PageWrapper backgroundColour="var(--faded-blue)">
      <h1 onClick={() => navigateToBooks()}>Slideshow</h1>
    </PageWrapper>
  );
};

export default Home;
