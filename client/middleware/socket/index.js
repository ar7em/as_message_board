import io from "socket.io-client";
import * as messagesActions from "actions/messages";
import { store } from "store";

const socket = io();

socket.on("chat message", function({chat, message, author}){
  store.dispatch(messagesActions.receive(chat, message, author));
});

export default () => next => action => {
  if (action.type === messagesActions.SUBMIT) {
    socket.emit("chat message", action.payload);
  }

  next(action);
};
