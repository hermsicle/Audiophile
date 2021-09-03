import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkout, Home, Earphones, Headphones, Speakers } from "./pages";
import { Navbar } from "./components";

function App() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <Router>
        <Navbar setToggleNav={setToggleNav} toggleNav={toggleNav} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/earphones" component={Earphones} />
          <Route exact path="/headphones" component={Headphones} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

{
  /* <button className="button-2">See Product</button>
<button className="button-3">Shop</button> */
}
