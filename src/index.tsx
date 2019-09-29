import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./scss/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// TODO: Enable at a later stage
serviceWorker.unregister();
