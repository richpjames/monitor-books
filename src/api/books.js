export async function getBooks() {
  const data = await fetch("/.netlify/functions/get-books")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
