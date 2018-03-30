import React from "react";
import { render } from "react-dom";
import io from "socket.io-client";
import App from "components/app";

const socket = io();

import "./global.css";

render(<App/>, document.getElementById("root"));
