export const getDevBooks = async () => {
  try {
    return await fetch("/.netlify/functions/get-dev-books")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getBooks Error", e);
  }
};
