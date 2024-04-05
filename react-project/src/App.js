import React from "react";
import { render } from "react-dom";
import { Router, Link } from '@reach/router'
import Pet from './Pet';
import SearchParams from "./SearchParams";
import Details from './Details';


const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          Adopt Me!
        </Link>
      </header>
      <Pet name="Abbey" animal="Dog" breed="schnauzer" />
      <Pet name="Rex" animal="Dog" breed="Pitbull" />
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
};

render(<App />, document.getElementById("root"));