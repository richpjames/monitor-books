import { RECEIVE_VIDEOS } from "../constants/actionTypes";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return {
        ...state,
        ...action.videos.reduce((obj, video) => {
          obj[video.id] = video;
          return obj;
        }, {}),
      };
    default:
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

export const getVideo = (state, id) => state.byId[id];
