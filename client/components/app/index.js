import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import Submit from "components/submit";
import Messages from "components/messages";
import ChannelsList from "components/list";
import Login from "components/login";
import { store, history } from "store";

import style from "./style.css";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={"/list"} component={() => (
          <div className={style.Layout}>
            <ChannelsList />
          </div>
        )} />
        <Route path={"/chats/:chatName"} component={({match}) => (
          <div className={style.Layout}>
            <Messages chatName={match.params.chatName} />
            <Submit chatName={match.params.chatName} />
          </div>
        )} />
        <Route component={() => (
          <Login/>
        )} />
      </Switch>
    </ConnectedRouter >
  </Provider>
);

export default App;
