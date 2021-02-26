import { SHOWN_INTRO_SLIDE } from "../actions/actionTypes";

export const slideshow = (
  state = {},
  action: { type: string; showSlideshow: boolean }
) => {
  switch (action.type) {
    case SHOWN_INTRO_SLIDE:
      return { showSlideshow: action.showSlideshow };
    default:
      return state;
  }
};
