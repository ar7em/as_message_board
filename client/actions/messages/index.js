export const SUBMIT = "SUBMIT";
export const RECEIVE = "RECEIVE";

export const submit = (chat, message) => (dispatch, getState) => {
  dispatch({
    type: SUBMIT,
    payload: {
      chat,
      message,
      author: getState().user.name
    }
  });
};

export const receive = (chat, message, author) => ({
  type: RECEIVE,
  payload: {
    chat,
    message,
    author
  }
});
