import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";

const App = () => <div>HEADER APP: <Header/></div>;

ReactDOM.render(<App />, document.getElementById("app"));
