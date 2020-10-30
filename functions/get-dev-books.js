const devProducts = require("./data/dev/books.json");

exports.handler = async () => {
  console.log("get dev books");

  return {
    statusCode: 200,
    body: JSON.stringify(devProducts),
  };
};
