export const getVideos = async () => {
  try {
    return await fetch("https://monitor-books.herokuapp.com/videos")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getVideos error ", e);
  }
};
