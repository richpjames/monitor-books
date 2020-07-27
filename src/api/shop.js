/**
 * Mocking client-server processing
 */
import _books from "../Data/books.json";
import _videos from "../Data/videos.json";

const TIMEOUT = 1;

const getBooks = () => _books;
const getVideos = () => _videos;

export default {
  getProducts: (cb) => cb(getBooks()),
  getVideos: (cb) => cb(getVideos()),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
