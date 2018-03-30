import * as userActions from "actions/user";

const initialState = {
  name: "Anonymous" + Date.now()
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case userActions.RENAME:
      return Object.assign({}, state, {
        name: payload.name
      });
    default:
      return state;
  }
}
