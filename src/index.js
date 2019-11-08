import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/";

//render на вход принимает именно компонент, а не имя элемента
ReactDOM.render(<App />, document.getElementById("root"));

console.log("Hello, React!");
