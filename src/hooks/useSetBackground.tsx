import { useLayoutEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
export const setBackground: (path: string) => void = (backgroundColour) => {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(
      "--current-background-colour",
      backgroundColour
    );
  }
};

type BackgroundColour =
  | "basket_background"
  | "about_background"
  | "books_background"
  | "occasions_background";

export const useSetBackground = (backgroundColour: BackgroundColour) => {
  const { allStrapiBackgroundColours } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiBackgroundColours {
        nodes {
          books_background
          about_background
          basket_background
          occasions_background
        }
      }
    }
  `);

  const backgroundColours = allStrapiBackgroundColours.nodes[0];

  useLayoutEffect(() => {
    setBackground(`${backgroundColours[backgroundColour]}`);
  }, []);
};
