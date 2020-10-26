import reducer, * as videos from "./videos";
import { RECEIVE_VIDEOS } from "../constants/actionTypes";

describe("reducers", () => {
  describe("videos", () => {
    describe("when videos are received", () => {
      let state = {};

      beforeEach(() => {
        state = reducer(
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

      it("contains the videos from the action", () => {
        expect(videos.getVideo(state, 1)).toEqual({
          id: 1,
          title: "Video 1",
        });
        expect(videos.getVideo(state, 2)).toEqual({
          id: 2,
          title: "Video 2",
        });
      });

      it("contains no other videos", () => {
        expect(videos.getVideo(state, 3)).toEqual(undefined);
      });
    });
  });
});
