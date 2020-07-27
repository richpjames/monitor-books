import { RECEIVE_VIDEOS } from "../constants/actionTypes";

export const videos = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};

export const getVideos = (state) => state.videos;
