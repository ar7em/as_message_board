import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import socket from "middleware/socket";
import rootReducer from "reducers/root";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      socket
    )
  )
);
