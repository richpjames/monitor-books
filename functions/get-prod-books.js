const prodProducts = require("./data/prod/books.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(prodProducts),
  };
};
