import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "reducers/user";
import messages from "reducers/messages";

export default combineReducers({
  user,
  messages,
  router: routerReducer
});
