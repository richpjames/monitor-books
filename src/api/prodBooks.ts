export const getProdBooks = async () => {
  return await fetch("https://monitor-books.herokuapp.com/books")
    .then((res) => res.json())
    .catch((err) => {
      console.log("getbooks error", err);
    });
};
