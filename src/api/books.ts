export const getBooks = async () => {
  try {
    await fetch("/.netlify/functions/get-books")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log(e);
  }
};
