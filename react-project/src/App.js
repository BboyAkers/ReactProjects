import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <div>
      <h1 id="">Adopt Me!</h1>
      <Pet name="Abbey" animal="Dog" breed="schnauzer" />
      <Pet name="Rex" animal="Dog" breed="Pitbull" />
      <SearchParams />
    </div>
  )
};

render(<App />, document.getElementById("root"));