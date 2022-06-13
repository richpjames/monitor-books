require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Monitor Books`,
    siteUrl: "https://monitorbooks.co.uk",
    social: {
      instagram: `monitorbooks`,
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://monitor-books.herokuapp.com`,
        collectionTypes: ["books", "videos", "background-colours"],
        singleTypes: [
          "about-page",
          "intro-page",
          "murmur-reading-series-description",
          "submissions",
          "basket-page",
          "favicon",
        ],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://e2760a181dfa48e1ba176da0b5059e69@o879658.ingest.sentry.io/5832534",
        sampleRate: 0.7,
        release: "monitor" + process.env.npm_package_version,
      },
    },
  ],
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    DEV_SSR: false,
    PARALLEL_SOURCING: false,
  },
};
