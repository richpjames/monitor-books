export async function getVideos() {
  const data = await fetch("/.netlify/functions/get-videos")
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
