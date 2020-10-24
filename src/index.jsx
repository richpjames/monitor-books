import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
import App from "./App";
import { loadState, saveState } from "./sessionStorage";

const middleware = [thunk];
// expose store when run in Cypress

const initialState = loadState();

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

console.log(process.env.NODE_ENV, "proccess env");

// expose store when run in Cypress
if (window.Cypress) {
  window.store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
