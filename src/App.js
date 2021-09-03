import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkout, Home, Earphones, Headphones, Speakers } from "./pages";
import { Navbar } from "./components";
import { Xx59, Xx99mark1, Xx99mark2 } from "./pages/headphones/";
function App() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <Router>
        <Navbar setToggleNav={setToggleNav} toggleNav={toggleNav} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/earphones" component={Earphones} />
          <Route exact path="/headphones" component={Headphones} />
          {/* Headphone Routes */}
          <Route exact path="/xx99-mark-two" component={Xx99mark2} />
          <Route exact path="/xx99-mark-one" component={Xx99mark1} />
          <Route exact path="/xx59" component={Xx59} />

          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
