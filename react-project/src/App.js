import React from "react";
import { render } from "react-dom";

// const Pet = ({name, animal, breed }) => {
//   return React.createElement("div")
// }


const App = () => {
  return React.createElement("div", {}, "testing");
};

render(React.createElement(App), document.getElementById("root"));