import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import socket from "middleware/socket";
import rootReducer from "reducers/root";
import createHistory from "history/createHashHistory";

const initialState = {};

export const history = createHistory();

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      socket,
      thunk
    )
  )
);
