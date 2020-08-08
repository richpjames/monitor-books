import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
import { getAllProducts, getAllVideos } from "./actions";
import App from "./App";
import { loadState, saveState } from "./sessionStorage";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(getAllProducts());
store.dispatch(getAllVideos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
