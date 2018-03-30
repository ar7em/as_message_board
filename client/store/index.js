import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "reducers/root";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);
