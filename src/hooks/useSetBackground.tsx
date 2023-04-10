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

type BackgroundColour = "basket" | "about" | "products" | "occasions";

export const useSetBackground = (backgroundColour: BackgroundColour) => {
  const { allSanityBackgroundColours } = useStaticQuery(graphql`
    query MyQuery {
      allSanityBackgroundColours {
        nodes {
          about
          basket
          occasions
          products
        }
      }
    }
  `);

  const backgroundColours = allSanityBackgroundColours.nodes[0];

  useLayoutEffect(() => {
    setBackground(`${backgroundColours[backgroundColour]}`);
  }, []);
};
