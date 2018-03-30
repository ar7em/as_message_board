import React from "react";
import { Provider } from "react-redux";
import Submit from "components/submit";
import Messages from "components/messages";
import { store } from "store";

import style from "./style.css";

const App = () => (
  <Provider store={store}>
    <div className={style.Layout}>
      <Messages />
      <Submit />
    </div>
  </Provider>
);

export default App;
