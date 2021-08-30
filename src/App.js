import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkout, Home, Earphones, Headphones, Speakers } from "./pages";
import { Navbar } from "./components";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <header>
          <Link to="/">
            <h3> Home</h3>
          </Link>
          <Link to="/speakers">
            <h3> Speakers</h3>
          </Link>
          <Link to="/earphones">
            <h3> Earphones</h3>
          </Link>
          <Link to="/headphones">
            <h3> Headphones</h3>
          </Link>
          <Link to="/checkout">
            <h3> Checkout</h3>
          </Link>
        </header>
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
