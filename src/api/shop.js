import { getVideos } from "./videos";
import { getBooks } from "./books";

const TIMEOUT = 1;

export default {
  getProducts: async (cb) => cb(await getBooks()),
  getVideos: async (cb) => cb(await getVideos()),
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
