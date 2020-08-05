import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import HeaderCustom from "./HeaderCustom";


const App = () => <div>HEADER APP: <HeaderCustom/></div>;

ReactDOM.render(<App />, document.getElementById("app"));
