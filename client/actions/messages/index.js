export const SUBMIT = "SUBMIT";
export const RECEIVE = "RECEIVE";

export const submit = (chat, message, author) => ({
  type: SUBMIT,
  payload: {
    chat,
    message,
    author
  }
});

export const receive = (chat, message, author) => ({
  type: RECEIVE,
  payload: {
    chat,
    message,
    author
  }
});
