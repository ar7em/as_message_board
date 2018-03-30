import React from "react";
import { Provider } from "react-redux";
import Chat from "components/chat";
import { store } from "store";

const App = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default App;
