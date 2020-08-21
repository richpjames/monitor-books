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

const persistedState = loadState();

const initialState: State = {
  cart: { addedIds: [], quantityById: {} },
  products: { byId: {}, visibleIds: [] },
  videos: { byId: {}, visibleIds: [] },
};

const store = createStore(
  reducer,
  persistedState || initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
