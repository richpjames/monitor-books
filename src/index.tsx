import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import { getAllProducts } from "./actions";
import App from "./App";
import { loadState, saveState } from "./localStorage";

const middleware = [thunk];

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
