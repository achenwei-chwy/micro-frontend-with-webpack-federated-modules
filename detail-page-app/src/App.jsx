import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Detail from "./Detail";

const App = () => <div>DETAIL APP:
default:  <Detail/>
colored:  <Detail colorName="beige"/>
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
