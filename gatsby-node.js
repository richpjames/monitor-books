exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  createTypes(`
      type SiteSiteMetadata {
        siteUrl: String
        social: Social
      }

    type Social {
        instagram: String
      }
  
     `);
};
