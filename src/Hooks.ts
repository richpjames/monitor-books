import { books } from "./Data/books.json";
import { videos } from "./Data/videos.json";

export const getBooks = (): Book[] => {
  return books;
};

export const getVideos = (): Video[] => {
  return videos;
};
