import { Actions } from "gatsby";

export const createSchemaCustomization = ({
  actions,
}: {
  actions: Actions;
}) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  createTypes(`
      type SiteMetadata {
        siteUrl: String
        social: Social
      }

    type Social {
        instagram: String
      }
  
     `);
};
export const createPages = ({ actions }: { actions: Actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/books",
    redirectInBrowser: true,
  });
};
