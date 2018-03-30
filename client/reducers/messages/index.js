import * as messagesActions from "actions/messages";

const initialState = {
  all: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case messagesActions.RECEIVE:
      return Object.assign({}, state, {
        all: state.all.concat([payload])
      });
    default:
      return state;
  }
}
