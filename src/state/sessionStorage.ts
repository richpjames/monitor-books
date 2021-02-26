import { initialState } from "../constants";

export const loadState = (): State => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (!serializedState) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

export const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("state save error");
    return undefined;
  }
};
