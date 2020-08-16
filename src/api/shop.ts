import { getVideos } from "./videos";
import { getBooks } from "./books";

const TIMEOUT = 1;

export default {
  getProducts: async (cb: (callback: void) => void) => cb(await getBooks()),
  getVideos: async (cb: (callback: void) => void) => cb(await getVideos()),
  buyProducts: (payload: any, cb: () => void, timeout: number) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
