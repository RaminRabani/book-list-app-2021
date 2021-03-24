import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import getBooks from "./getBooks";

ReactDOM.render(
  <React.StrictMode>
    <App getBooks={getBooks} />
  </React.StrictMode>,
  document.getElementById("root")
);
