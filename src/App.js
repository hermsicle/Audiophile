import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Checkout, Home, Earphones, Headphones, Speakers } from "./pages";
import { Navbar, ScrollToTop } from "./components";
import { Xx59, Xx99mark1, Xx99mark2 } from "./pages/headphones/";
import { Zx7, Zx9 } from "./pages/speakers/";
import { Yx1 } from "./pages/earphones/";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar
          setToggleNav={setToggleNav}
          toggleNav={toggleNav}
          toggleCart={toggleCart}
          setToggleCart={setToggleCart}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/earphones" component={Earphones} />
          <Route exact path="/headphones" component={Headphones} />
          {/* Headphone Routes */}
          <Route exact path="/xx99mark2" component={Xx99mark2} />
          <Route exact path="/xx99mark1" component={Xx99mark1} />
          <Route exact path="/xx59" component={Xx59} />
          {/* Speaker Routes */}
          <Route exact path="/zx7" component={Zx7} />
          <Route exact path="/zx9" component={Zx9} />
          {/* Earphones Routes */}
          <Route exact path="/yx1" component={Yx1} />

          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
