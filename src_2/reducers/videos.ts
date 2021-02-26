import { RECEIVE_VIDEOS } from "../constants/actionTypes";
import { combineReducers } from "redux";
import { initialState } from "../constants";

const byId = (state: Videos = initialState.videos, action: VideoAction) => {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return {
        ...state,
        ...action.videos.reduce((obj: { [key: string]: Video }, video) => {
          obj[video.id] = video;
          return obj;
        }, {}),
      };
    default:
      return state;
  }
};

const visibleIds = (
  state: Videos = initialState.videos,
  action: VideoAction
) => {
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

export const getVideo = (state: Videos, id: string) => state.byId[id];
