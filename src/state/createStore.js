import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
const middleware = [thunk];
import { loadState, saveState } from "./sessionStorage";

const initialState = loadState();

export const createStore = reduxCreateStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const createStore = () => reduxCreateStore(reducer, initialState);
console.log(createStore().getState());
export default createStore;
