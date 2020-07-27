import { RECEIVE_VIDEOS } from "../constants/actionTypes";
import { combineReducers } from "redux";

export const videos = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return { ...state, ...action.videos };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return {
        ...state,
        ...action.videos.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    default:
      const { videoId } = action;
      if (videoId) {
        return {
          ...state,
          [videoId]: videos(state[videoId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos.map((video) => video.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getVideos = (state, action) => videos({ ...state }, action);
export const getVideo = (state, id) => state.byId[id];
