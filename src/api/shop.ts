import { getVideos } from "./videos";
import { getBooks } from "./books";

const TIMEOUT = 1;

export default {
  getProducts: getBooks,
  getVideos: getVideos,
  buyProducts: (payload: any, cb: () => void, timeout: number) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
