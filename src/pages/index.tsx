import React, { useEffect } from "react";
import { navigate } from "gatsby";

import { PageWrapper } from "../Components/Common";
const navigateToBooks = () => navigate("/books/propositions");

const Home = () => {
  useEffect(() => {
    if (window)
      (window as any).introTimer = setTimeout(() => {
        navigateToBooks();
      }, 5000);
  }, []);
  return (
    <PageWrapper backgroundColour="skyBlue">
      <h1 onClick={() => navigateToBooks()}>Slideshow</h1>
    </PageWrapper>
  );
};

export default Home;
