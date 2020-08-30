const testProducts = require("./data/dev/books.json");
const liveProducts = require("./data/live/books.json");

exports.handler = async () => {
  const products =
    process.env.NODE_ENV === "production" ? liveProducts : testProducts;
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
