export const getDevBooks = async () => {
  try {
    return await fetch("https://monitor-books.herokuapp.com/books")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getBooks Error", e);
  }
};
