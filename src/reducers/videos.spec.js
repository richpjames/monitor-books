import { videos, getVideos } from "./videos";
import { RECEIVE_VIDEOS } from "../constants/actionTypes";

describe("reducers", () => {
  describe("videos", () => {
    describe("when videos are received", () => {
      let state = {};

      beforeEach(() => {
        state = videos(
          {},
          {
            type: RECEIVE_VIDEOS,
            videos: [
              {
                id: 1,
                title: "Video 1",
              },
              {
                id: 2,
                title: "Video 2",
              },
            ],
          }
        );
      });

      it("should provide the initial state", () => {
        expect(
          getVideos(state, { type: RECEIVE_VIDEOS, videos: state })
        ).toStrictEqual([
          {
            id: 1,
            title: "Video 1",
          },
          {
            id: 2,
            title: "Video 2",
          },
        ]);
      });
    });
  });
});
