require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Monitor books`,
    description: `Books.`,
    author: `Rich James`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://monitor-books.herokuapp.com`,
        contentTypes: ["books", "videos"],
      },
    },
  ],
};
