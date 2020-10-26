export const getProdBooks = async () => {
  try {
    return await fetch("/.netlify/functions/get-prod-books")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getBooks Error", e);
  }
};
