const products = require("./data/books.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
