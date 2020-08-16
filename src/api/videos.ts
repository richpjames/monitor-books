export const getVideos = async () => {
  try {
    await fetch("/.netlify/functions/get-videos")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log(e);
  }
};
