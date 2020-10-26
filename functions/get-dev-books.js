const devProducts = require("./data/dev/books.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(devProducts),
  };
};
